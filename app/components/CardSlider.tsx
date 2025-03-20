"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { frankRuhlLibrev, frankRuhlLibrevBold } from "../utils/fonts";
import Image from "next/image";
import profileAvatar from "@/public/profile-avatar.png";

const CardSlider = () => {
  const swiperStyles = {
    "--swiper-pagination-color": "#001F3F",
    "--swiper-pagination-bullet-size": "11px",
    "--swiper-pagination-bullet-inactive-color": "transparent",
  };
  return (
    <div className="flex items-center justify-center flex-col z-50">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        style={swiperStyles as React.CSSProperties}
        modules={[FreeMode, Pagination]}
        className="max-w-[100%]"
      >
        {[...Array(6)].map((_, key) => (
          <SwiperSlide key={key}>
            <div className="pb-20 flex flex-col items-center gap-6 bg-lightBrown-100 p-10 mb-20 rounded-lg cursor-pointer">
              <p
                className={`${frankRuhlLibrevBold.className} text-[18px] leading-[157%] text-primary text-center`}
              >
                Comfortable and met all my expectations! I ordered a medium and
                it fit perfectly
              </p>
              <p
                className={`${frankRuhlLibrev.className} text-[14px] leading-[30px] opacity-75 text-center`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt
                urna, at enim tempo. Pellentesque amet Lorem ipsum dolor sit
                amet
              </p>
              <div className="flex flex-col justify-center items-center pt-2 gap-2">
                <Image
                  src={profileAvatar}
                  alt="profile picture"
                  width={0}
                  height={0}
                  className="rounded-full w-[77px] h-[77px]"
                />
                <h1
                  className={`${frankRuhlLibrevBold.className} text-[16px] text-primary`}
                >
                  Anisa Zahra
                </h1>
                <p
                  className={`${frankRuhlLibrev.className} text-[14px] text-primary opacity-75 leading-[24px]`}
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
