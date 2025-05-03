// app/product/[id]/page.tsx or similar
import { Footer, Navbar } from "@/app/components";
import ProductImageDetailsWrapper from "@/app/components/ProductDetailsWrapper";
import blueTshirt from "@/public/productDetails/t-shirts/blue-t-shirt.webp";
import brownTshirt from "@/public/productDetails/t-shirts/brown-t-shirt.webp";
import blackTshirt from "@/public/productDetails/t-shirts/black-t-shirt.webp";
import dirtyWhiteTshirt from "@/public/productDetails/t-shirts/dirty-white-t-shirt.webp";
import coffeeTshirt from "@/public/productDetails/t-shirts/coffee-color-t-shirt.webp";
import grayTshirt from "@/public/productDetails/t-shirts/gray-t-shirt.webp";
import greenTshirt from "@/public/productDetails/t-shirts/green-t-shirt.webp";
import cementGrayTshirt from "@/public/productDetails/t-shirts/cement-gray-t-shirt.webp";
import { ColorType, ProductType, SizeType } from "@/app/types/product";
import ProductDetailsAccordion from "@/app/components/ProductDetailsAccordion";
import { montserrat, montserratBold } from "@/app/utils/fonts";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Products } from "@/app/constants";

type AccordionProductType = {
  longDescription: string;
  shortDescription: string;
  highlights: string[];
  shippingReturns: string;
  sizeFit: string;
  sizeChart: {
    size: string;
    chest: string;
    length: string;
  }[];
};

const ProductDetailsPage = () => {
  const colors: ColorType[] = [
    { name: "Blue", image: blueTshirt },
    { name: "Brown", image: brownTshirt },
    { name: "Black", image: blackTshirt },
    { name: "Dirty White", image: dirtyWhiteTshirt },
    { name: "Coffee", image: coffeeTshirt },
    { name: "Gray", image: grayTshirt },
    { name: "Green", image: greenTshirt },
    { name: "Cement Gray", image: cementGrayTshirt },
  ];

  const sizeOptions: SizeType[] = [
    { name: "S", symbol: "S", fullName: "Small" },
    { name: "M", symbol: "M", fullName: "Medium" },
    { name: "L", symbol: "L", fullName: "Large" },
    { name: "XL", symbol: "XL", fullName: "Extra Large" },
  ];

  // const product: ProductType = {
  //   id: "1",
  //   name: "oversized t-shirt",
  //   image: blueTshirt,
  //   price: "30k FRW",
  //   shortDescription: "Oversized High Collar Tee v5",
  //   longDescription:
  //     "This is a long description of the customized hoodie. It is made of high-quality materials and is perfect for any occasion.",
  //   rating: 4.5,
  //   reviews: 100,
  //   category: "Hoodies",
  //   stock: 50,
  //   size: { name: "M", symbol: "M", fullName: "Medium" },
  //   color: { name: "Blue", image: blueTshirt },
  //   quantity: 1,
  // };

  // const accordionProduct: AccordionProductType = {
  //   longDescription:
  //     "A premium cotton t-shirt designed for everyday comfort and style. Made with 100% organic cotton and tailored for a relaxed fit, this shirt will quickly become a wardrobe essential.",
  //   shortDescription:
  //     "Soft, breathable, and sustainably made — your new favorite everyday t-shirt.",
  //   highlights: [
  //     "100% organic cotton",
  //     "Relaxed fit",
  //     "Pre-shrunk & garment dyed",
  //     "Machine washable",
  //     "Made in Portugal",
  //   ],
  //   shippingReturns:
  //     "Free standard shipping on orders over $50. We also offer expedited shipping at checkout. To return an item, please visit our returns portal and use your order number to start the process.",
  //   sizeFit:
  //     "Fits true to size. For a looser fit, consider sizing up. Fabric has slight stretch.",
  //   sizeChart: [
  //     { size: "S", chest: "36-38", length: "27" },
  //     { size: "M", chest: "39-41", length: "28" },
  //     { size: "L", chest: "42-44", length: "29" },
  //     { size: "XL", chest: "45-47", length: "30" },
  //   ],
  // };

  return (
    <div className="flex flex-col w-full">
      <div className="absolute bg-white-primary w-full">
        <Navbar />
      </div>
      {/* sm:py-20 py-5 */}
      <div className=" bg-gray-50 w-full sm:pt-40 pt-28 sm:px-48 overflow-hiddenflex flex flex-col sm:gap-20 gap-10 pb-10">
        <div className=" flex-col gap-10 ">
          <ProductImageDetailsWrapper
            colors={colors}
            baseProduct={Products[0]}
            sizeOptions={sizeOptions}
          />
        </div>
        <div>
          <ProductDetailsAccordion product={Products[0]} />
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

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
