"use client";

import { useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { ChevronLeft } from "lucide-react";

import ProductImageDetailsWrapper from "@/app/components/ProductDetailsWrapper";
import ProductDetailsAccordion from "@/app/components/ProductDetailsAccordion";
import { Footer } from "@/app/components";
import { montserrat } from "@/app/utils/fonts";

import { stopLoading } from "@/lib/redux/slices/loadingSlice";
import { RootState } from "@/lib/redux/store";

export default function ProductDetailsPage() {
  const { productId } = useParams<{ productId: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(stopLoading());
  }, [dispatch]);

  const products = useSelector((state: RootState) => state.products.products);
  const product = products.find((p) => p.id === productId);

  if (!product) return notFound();

  return (
    <div className="flex flex-col w-full">
      <main className="bg-gray-50 w-full sm:pt-40 pt-28 sm:px-48 px-4 overflow-hidden flex flex-col gap-10 pb-10">
        <ProductImageDetailsWrapper
          colors={product.colorOptions}
          baseProduct={product}
          sizeOptions={product.sizeChart}
        />

        <ProductDetailsAccordion product={product} />

        <div className="flex justify-center items-center">
          <Link
            href="/#products"
            className={`${montserrat.className} bg-primary text-white-primary px-4 py-2 rounded-md flex items-center gap-2 hover:bg-opacity-80 transition duration-300 ease-in-out`}
          >
            <ChevronLeft />
            <span>Back To Products</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
