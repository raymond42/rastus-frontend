"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { stopLoading } from "@/lib/redux/slices/loadingSlice";
import { clearCart } from "@/lib/redux/slices/cartSlice";

export default function ThankYouPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
    dispatch(stopLoading());
  }, [dispatch]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-xl bg-white shadow-md p-10 rounded-lg text-center space-y-6">
        <h1 className="text-3xl font-bold text-primary">Thank You!</h1>
        <p className="text-gray-600 text-lg">
          We&apos;ve received your order. We will confirm your payment and
          contact you soon for delivery.
        </p>
        <Link href="/#products">
          <Button className="mt-4">Back to Products</Button>
        </Link>
      </div>
    </div>
  );
}
