"use client";
import React from "react";
import { frankRuhlLibrevBold } from "@/app/utils/fonts";

type ButtonProps = {
  title: string;
};

const Button = ({ title }: ButtonProps) => {
  return (
    <button
      className={`${frankRuhlLibrevBold.className} text-primary text-[18px] bg-white h-16 relative w-9/12 bottom-20 flex justify-center items-center hover:bg-primary hover:text-white`}
    >
      {title}
    </button>
  );
};

export default Button;
