"use client";
import React, { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
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
    <div className="w-[115px] h-[39px]">
      <div className="flex items-center justify-between w-full h-full px-4 border-2  border-primary rounded-md">
        <div className="button">
          <button className="text-white" onClick={handleDecrement}>
            -
          </button>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <input
            type="text"
            value={quantity}
            onChange={handleInputChange}
            onKeyDown={handleOnKeyDown}
            className="w-12 text-center flex items-center justify-center border-none outline-none bg-transparent"
          />
        </div>
        <div className="button">
          <button className="text-white" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
