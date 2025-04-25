import { StaticImageData } from "next/image";

export type ProductType = {
  id: string;
  name: string;
  image: StaticImageData | string;
  price: string;
  shortDescription: string;
  longDescription: string;
  rating: number;
  reviews: number;
  category: string;
  stock: number;
  size: SizeType;
  color: ColorType;
  quantity: number;
};

export type ColorType = {
  name: string;
  image: StaticImageData | string;
};

export type SizeType = {
  name: string;
  symbol: string;
  fullName: string;
};
