import React from "react";
import { ColorType, SizeType } from "@/app/types/product";
import { montserrat } from "@/app/utils/fonts";

type BoxProps = {
  items: ColorType[] | SizeType[];
  selectedItem: ColorType | SizeType;
  handleItemChange: (item: ColorType | SizeType) => void;
};

const Box = ({ items, selectedItem, handleItemChange }: BoxProps) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {items.map((item, index) => {
        const isSelected = item.name === selectedItem.name;

        return (
          <p
            key={index}
            className={`${montserrat.className} ${
              isSelected ? "border-opacity-50" : "border-opacity-10"
            } text-base capitalize border-2 border-primary px-3 py-2 cursor-pointer`}
            onClick={() => {
              handleItemChange(item);
            }}
            role="button"
            tabIndex={0}
          >
            {item.name}
          </p>
        );
      })}
    </div>
  );
};

export default Box;
