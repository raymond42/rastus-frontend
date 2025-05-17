"use client";
import { notFound, useParams } from "next/navigation";
import ProductImageDetailsWrapper from "@/app/components/ProductDetailsWrapper";
import ProductDetailsAccordion from "@/app/components/ProductDetailsAccordion";
import { Footer } from "@/app/components";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { montserrat } from "@/app/utils/fonts";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const products = useSelector((state: RootState) => state.products.products);
  const product = products.find((p) => p.id === id);

  if (!product) return notFound();

  return (
    <div className="flex flex-col w-full">
      <div className=" bg-gray-50 w-full sm:pt-40 pt-28 sm:px-48 overflow-hidden flex flex-col sm:gap-20 gap-10 pb-10">
        <div className="flex-col gap-10">
          <ProductImageDetailsWrapper
            colors={product.colorOptions}
            baseProduct={product}
            sizeOptions={product.sizeChart}
          />
        </div>
        <div>
          <ProductDetailsAccordion product={product} />
        </div>
        <div className="flex justify-center items-center w-full">
          <Link
            href="/"
            className={`${montserrat.className} bg-primary text-white-primary px-4 py-2 rounded-md flex items-center gap-2 hover:bg-opacity-80 transition duration-300 ease-in-out`}
          >
            <ChevronLeft />
            <span>Back Home</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
