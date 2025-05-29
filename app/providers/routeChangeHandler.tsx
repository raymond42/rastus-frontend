"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { stopLoading } from "@/lib/redux/slices/loadingSlice";

export const RouteChangeHandler = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const searchParamsString = searchParams.toString();

  useEffect(() => {
    dispatch(stopLoading());
  }, [pathname, searchParamsString, dispatch]);

  return null;
};
