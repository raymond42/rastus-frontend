// components/ConfirmDeleteDialog.tsx
"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { ProductType } from "../types/product";
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type ConfirmDeleteDialogProps = {
  trigger: ReactNode;
  onConfirm: () => void;
  item: ProductType;
};

export function ConfirmDeleteDialog({
  trigger,
  onConfirm,
  item,
}: ConfirmDeleteDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-sm w-[90%] sm:max-w-md sm:w-full mx-auto">
        <DialogHeader className="text-lg font-semibold">
          <DialogTitle>Confirm to remove from Cart</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-gray-500">
          Are you sure you want to remove{" "}
          <b className="underline">
            {item.color.name} {item.name}, {item.size.name}
          </b>{" "}
          from your cart?
        </p>
        <DialogFooter className="mt-4 flex gap-2">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="default" onClick={onConfirm}>
            Yes, Remove
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
