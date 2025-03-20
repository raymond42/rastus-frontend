"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRate = () => {
  const [rating, setRating] = useState<number | null>(null);

  const [rateColor, setRateColor] = useState<string | null>(null);

  return (
    <div className="flex gap-1 cursor-pointer">
      {[...Array(5)].map((star, key) => {
        const currentRate = key + 1;
        return (
          <FaStar
            key={key}
            size={20}
            color={
              (rating && currentRate <= rating) || rateColor ? "orange" : "grey"
            }
            aria-valuenow={currentRate}
            onClick={() => setRating(currentRate)}
          />
        );
      })}
    </div>
  );
};

export default StarRate;
