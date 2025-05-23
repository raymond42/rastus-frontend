"use client";
import React, { useEffect, useState } from "react";
import { jost, jostSemiBold } from "../utils/fonts";

type TimeLeft = {
  hours: string;
  minutes: string;
  seconds: string;
};

const DealTime: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: "24",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 24);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = endTime.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeBox = (value: string, label: string) => (
    <div className="w-[70px] sm:w-[90px] bg-white-primary py-3 px-4 flex flex-col items-center rounded-md shadow-md">
      <p
        className={`${jostSemiBold.className} text-[32px] sm:text-[42px] text-primary font-mono`}
      >
        {value}
      </p>
      <p
        className={`${jost.className} text-[14px] sm:text-[16px] text-primary`}
      >
        {label}
      </p>
    </div>
  );

  return (
    <div className="flex items-center gap-2 sm:gap-4 justify-center">
      {TimeBox(timeLeft.hours, "Hours")}
      <span className="text-primary text-[32px] sm:text-[42px] font-bold">
        :
      </span>
      {TimeBox(timeLeft.minutes, "Min")}
      <span className="text-primary text-[32px] sm:text-[42px] font-bold">
        :
      </span>
      {TimeBox(timeLeft.seconds, "Sec")}
    </div>
  );
};

export default DealTime;
