"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { Spinner } from "@/components/ui/spinner";

export function PageTransitionSpinner() {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <Spinner className="h-8 w-8 text-white" />
    </div>
  );
}
