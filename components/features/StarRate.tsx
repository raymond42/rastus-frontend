"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

type StarRateProps = {
  rate: number;
};

const StarRate = (rate: StarRateProps) => {
  const [rating, setRating] = useState<number | null>(5);

  return (
    <div className="flex gap-1 cursor-pointer">
      {[...Array(5)].map((_, key) => {
        const currentRate = key + 1;
        return (
          <FaStar
            key={key}
            // size={20}
            color={rating && currentRate <= rating ? "orange" : "grey"}
            aria-valuenow={rate ? rate.rate : currentRate}
            onClick={() => setRating(currentRate)}
            className="sm:size-[20px]"
          />
        );
      })}
    </div>
  );
};

export default StarRate;
