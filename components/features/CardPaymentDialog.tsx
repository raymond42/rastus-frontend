import * as Dialog from "@radix-ui/react-dialog";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { convertToSubcurrency, formatPrice } from "@/utils/helpers";
import CardCheckout from "./CardCheckout";
import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

type CardPaymentDialogProps = {
  amount: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  showCancel: boolean;
};

export default function CardPaymentDialog({
  amount,
  open,
  onOpenChange,
  showCancel,
}: CardPaymentDialogProps) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const router = useRouter();

  const handleSuccess = () => {
    onOpenChange(false); // Close the dialog
    setShowSuccessModal(true); // Show success modal
  };

  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => {
        router.push(`/thankyou?amount=${amount}`);
        setShowSuccessModal(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessModal, router, amount]);

  return (
    <>
      <Dialog.Root open={open} onOpenChange={onOpenChange}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm overflow-hidden" />
          <Dialog.Content
            className="fixed z-50 top-1/2 left-1/2 w-[90vw] max-w-xl -translate-x-1/2 -translate-y-1/2 
  max-h-[90vh] overflow-y-auto bg-gradient-to-br from-primary to-black 
  p-6 sm:p-8 rounded-xl shadow-2xl text-white-primary"
          >
            <div className="mb-6 text-center">
              <Dialog.Title className="text-3xl font-bold">
                Secure Card Payment
              </Dialog.Title>
              <p className="mt-2">
                You are about to pay{" "}
                <span className="font-semibold text-lg">
                  {formatPrice(amount)}
                </span>{" "}
                to <span className="font-bold text-lg">Rastus</span>
                <br />
                <span className="text-sm">
                  Please choose the payment method and enter your card details
                  below to complete the transaction.
                </span>
              </p>
            </div>

            <Elements
              stripe={stripePromise}
              options={{
                mode: "payment",
                amount: convertToSubcurrency(amount),
                currency: "rwf",
              }}
            >
              <CardCheckout
                amount={amount}
                showCancel={showCancel}
                onSuccess={handleSuccess}
              />
            </Elements>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {showSuccessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white-primary p-8 sm:p-10 rounded-2xl text-center shadow-2xl max-w-md w-full">
            <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-6" />

            <h2 className="text-2xl font-bold text-green-700 mb-2">
              Payment Successful!
            </h2>

            <p className="text-gray-600 text-base mb-6">
              Thank you for shopping with Rastus!
            </p>

            <div className="w-24 h-1 mx-auto bg-green-100 rounded-full overflow-hidden">
              <div className="w-full h-full bg-green-500 animate-pulse" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
