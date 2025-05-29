"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { stopLoading } from "@/lib/redux/slices/loadingSlice";

export const RouteChangeHandler = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // Stop loading spinner whenever route or query changes
    dispatch(stopLoading());
  }, [pathname, searchParams.toString(), dispatch]);

  return null;
};
