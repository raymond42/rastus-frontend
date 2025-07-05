"use client";
import React from "react";

type QuantitySelectorProps = {
  quantity: number;
  setQuantity: (quantity: number) => void;
};

const QuantitySelector = ({ quantity, setQuantity }: QuantitySelectorProps) => {
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity > 1 ? quantity - 1 : quantity);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const handleOnKeyDown = () => {
    setQuantity(1);
  };

  return (
    <div className="sm:w-[115px] w-[200px] sm:h-[39px] h-[50px]">
      <div className="flex items-center justify-between w-full h-full px-4 border-2 border-opacity-50 border-primary rounded-md">
        <div className="button w-[20px]">
          <button
            className="text-white w-full text-[30px]"
            onClick={handleDecrement}
          >
            -
          </button>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <input
            type="text"
            value={quantity}
            onChange={handleInputChange}
            onKeyDown={handleOnKeyDown}
            className="w-12 text-center flex items-center justify-center border-none outline-none bg-transparent text-primary text-opacity-100 text-[20px] h-full"
          />
        </div>
        <div className="button w-[40px]">
          <button className="w-full text-[30px]" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
