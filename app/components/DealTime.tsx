import React from "react";
import { frankRuhlLibrev, frankRuhlLibrevBold } from "../utils/fonts";

const DealTime = () => {
  return (
    <div className="flex gap-5">
      <div className="bg-white-primary py-3 px-7 gap-1 flex flex-col items-center">
        <p
          className={`${frankRuhlLibrevBold.className} text-[42px] text-primary`}
        >
          08
        </p>
        <p className={`${frankRuhlLibrev.className} text-[16px] text-primary`}>
          Days
        </p>
      </div>
      <div className="bg-white-primary py-3 px-7 gap-1 flex flex-col items-center">
        <p
          className={`${frankRuhlLibrevBold.className} text-[42px] text-primary`}
        >
          09
        </p>
        <p className={`${frankRuhlLibrev.className} text-[16px] text-primary`}>
          Hours
        </p>
      </div>
      <div className="bg-white-primary py-3 px-7 gap-1 flex flex-col items-center">
        <p
          className={`${frankRuhlLibrevBold.className} text-[42px] text-primary`}
        >
          14
        </p>
        <p className={`${frankRuhlLibrev.className} text-[16px] text-primary`}>
          Min
        </p>
      </div>
    </div>
  );
};

export default DealTime;
