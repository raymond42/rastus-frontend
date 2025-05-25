"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { startLoading } from "@/lib/redux/slices/loadingSlice";

export function PaymentInstructionsModal({
  amount,
  open,
  onOpenChange,
}: {
  amount: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleConfirmPayment = async () => {
    onOpenChange(false);
    dispatch(startLoading());
    await new Promise((res) => setTimeout(res, 2000));
    router.push("/thankyou");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md sm:rounded-lg p-6 sm:p-8">
        <DialogTitle className="text-xl font-semibold">
          Make a Payment
        </DialogTitle>
        <DialogDescription asChild>
          <div className="space-y-4 mt-2">
            <p>
              Please send{" "}
              <strong className="text-primary">
                {amount.toLocaleString()}K RWF
              </strong>{" "}
              to:
            </p>
            <div className="bg-gray-100 p-4 rounded text-center">
              <div className="font-bold text-lg">+250 79 440 9561</div>
              <div className="font-medium text-base">
                Names: Ninahazwe Fabrice
              </div>
              <div className="text-sm text-gray-600 mt-1">MTN Mobile Money</div>
            </div>
            <p>After payment, click the button below to confirm.</p>
            <Button className="w-full mt-2" onClick={handleConfirmPayment}>
              I&apos;ve Paid
            </Button>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
