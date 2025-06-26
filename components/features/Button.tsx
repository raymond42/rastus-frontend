"use client";
import React from "react";
import { jostSemiBold } from "@/utils/fonts";
import clsx from "clsx";

type ButtonProps = {
  children?: React.ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  textSize?: string;
  width?: string;
  height?: string;
  className?: string;
};

const Button = ({
  textColor = "white",
  backgroundColor = "transparent",
  borderColor = "black",
  textSize = "base",
  width = "",
  height = "",
  className = "",
  children,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        jostSemiBold.className,
        "border-2",
        textColor,
        textSize,
        borderColor,
        width,
        height,
        backgroundColor,
        "flex items-center justify-center gap-2", // Flexbox for icon + text alignment
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
