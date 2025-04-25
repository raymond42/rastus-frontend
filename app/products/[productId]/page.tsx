// app/product/[id]/page.tsx or similar
import { Navbar } from "@/app/components";
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

  const product: ProductType = {
    id: "1",
    name: "oversized t-shirt",
    image: blueTshirt,
    price: "30k FRW",
    shortDescription: "Oversized High Collar Tee v5",
    longDescription:
      "This is a long description of the customized hoodie. It is made of high-quality materials and is perfect for any occasion.",
    rating: 4.5,
    reviews: 100,
    category: "Hoodies",
    stock: 50,
    size: { name: "M", symbol: "M", fullName: "Medium" },
    color: { name: "Blue", image: blueTshirt },
    quantity: 1,
  };

  return (
    <div className="flex flex-col w-full">
      <div className="absolute bg-white-primary w-full">
        <Navbar />
      </div>

      <div className="main-div w-full sm:pt-40 pt-28 overflow-hidden bg-gray-50">
        <ProductImageDetailsWrapper
          colors={colors}
          baseProduct={product}
          sizeOptions={sizeOptions}
        />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
