"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { convertToSubcurrency, formatPrice } from "@/utils/helpers";
import * as Dialog from "@radix-ui/react-dialog";
import { CheckCircle, CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  amount: number;
  showCancel: boolean;
  onSuccess: () => void;
};

const CardCheckout = ({ amount, showCancel, onSuccess }: Props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage(undefined);

    if (!stripe || !elements) {
      setErrorMessage("Stripe has not loaded yet.");
      setLoading(false);
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: window.location.origin,
      },
      redirect: "if_required",
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
    } else if (paymentIntent?.status === "succeeded") {
      setSuccess(true);
      onSuccess();

      // Redirect after short delay so user can see success modal
      setTimeout(() => {
        router.push(`/thankyou?amount=${amount}`);
      }, 3000);
    }
  };

  const isReady = !!clientSecret && !!stripe && !!elements;

  if (!isReady) {
    return (
      <div className="flex justify-center items-center h-20">
        <div className="animate-spin h-6 w-6 border-4 border-white-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white-primary rounded-lg p-6 sm:p-8 shadow-md text-black space-y-6"
        aria-live="polite"
      >
        <PaymentElement />

        {errorMessage && (
          <div
            role="alert"
            className="text-red-600 text-sm border border-red-300 rounded p-2 bg-red-50"
          >
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={!stripe || loading}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white-primary font-semibold py-3 rounded-md transition-all duration-200 ease-in-out hover:bg-blue-700 hover:scale-[1.02] disabled:opacity-50"
          aria-busy={loading}
        >
          <CreditCard className="w-5 h-5" />
          {loading ? "Processing..." : `Pay ${formatPrice(amount)}`}
        </button>

        {showCancel && (
          <Dialog.Close asChild>
            <button
              type="button"
              className="mt-6 w-full px-6 py-2 text-primary font-medium backdrop-blur-sm shadow-sm rounded-full transition-all duration-200 ease-in-out hover:bg-primary/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
              aria-label="Cancel payment"
            >
              Cancel
            </button>
          </Dialog.Close>
        )}
      </form>

      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white-primary p-8 rounded-2xl text-center shadow-2xl max-w-md w-full">
            <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-green-700 mb-3">
              Payment Successful!
            </h2>
            <p className="text-gray-600 text-base">
              Thank you for your payment. Redirecting to thank you page...
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CardCheckout;
