"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function PaymentInstructionsModal({ amount }: { amount: number }) {
  const router = useRouter();

  const handleConfirmPayment = () => {
    router.push("/thank-you");
  };

  return (
    <div className="p-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full">Proceed to Payment</Button>
        </DialogTrigger>
        <DialogContent className="max-w-md sm:rounded-lg p-6 sm:p-8">
          <DialogTitle className="text-xl font-semibold">
            Make a Payment
          </DialogTitle>
          <DialogDescription asChild>
            <div className="space-y-4 mt-2">
              <p>
                Please send{" "}
                <strong className="text-primary">
                  {amount.toLocaleString()} RWF
                </strong>{" "}
                to:
              </p>
              <div className="bg-gray-100 p-4 rounded text-center">
                <div className="font-bold text-lg">+250 79 440 9561</div>
                <div className="font-medium text-base">
                  Names: Ninahazwe Fabrice
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  MTN Mobile Money
                </div>
              </div>
              <p>After payment, click the button below to confirm.</p>
              <Button className="w-full mt-2" onClick={handleConfirmPayment}>
                I&apos;ve Paid
              </Button>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
}
