"use client";
import React from "react";
import { frankRuhlLibrevBold } from "@/app/utils/fonts";
import clsx from "clsx";

type ButtonProps = {
  title: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  textSize?: string;
  width?: string;
  height?: string;
  className?: string;
};

const Button = ({
  title,
  textColor = "white",
  backgroundColor = "transparent",
  borderColor = "black",
  textSize = "base",
  width = "",
  height = "",
  className = "",
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        frankRuhlLibrevBold.className,
        "border-2",
        textColor,
        textSize,
        borderColor,
        width,
        height,
        backgroundColor,
        className
      )}
    >
      {title}
    </button>
  );
};

export default Button;
