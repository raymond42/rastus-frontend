"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { jost, jostSemiBold } from "../utils/fonts";
import Image from "next/image";
import profileAvatar from "@/public/profile-avatar.png";

const CardSlider = () => {
  const swiperStyles = {
    "--swiper-pagination-color": "#001F3F",
    "--swiper-pagination-bullet-size": "11px",
    "--swiper-pagination-bullet-inactive-color": "transparent",
  } as React.CSSProperties;

  const cards = [...Array(6)];

  return (
    <div className="flex flex-col items-center justify-center w-full z-50">
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 }, // Mobile: 1 card per view
          640: { slidesPerView: 2, spaceBetween: 15 }, // Tablet: 2 cards per view
          1024: { slidesPerView: 3, spaceBetween: 20 }, // Larger screens: 3 cards per view
        }}
        freeMode
        pagination={{ clickable: true }}
        style={swiperStyles}
        modules={[FreeMode, Pagination]}
        className="w-full"
      >
        {cards.map((_, key) => (
          <SwiperSlide key={key}>
            <div className="pb-20 flex flex-col items-center gap-6 bg-lightBrown-100 p-10 sm:mb-20 mb-14 rounded-lg cursor-pointer">
              <p
                className={`${jostSemiBold.className} text-[18px] leading-[157%] text-primary text-center`}
              >
                Comfortable and met all my expectations! I ordered a medium and
                it fit perfectly
              </p>
              <p
                className={`${jost.className} text-[14px] leading-[30px] opacity-75 text-center`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                lacus, auctor pretium ac ultrices.
              </p>
              <div className="flex flex-col justify-center items-center pt-2 gap-2">
                <Image
                  src={profileAvatar}
                  alt="profile picture"
                  width={77}
                  height={77}
                  className="rounded-full"
                />
                <h1
                  className={`${jostSemiBold.className} text-[16px] text-primary`}
                >
                  Anisa Zahra
                </h1>
                <p
                  className={`${jost.className} text-[14px] text-primary opacity-75 leading-[24px]`}
                >
                  Founder Milenial
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
