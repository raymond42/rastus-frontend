"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { Swiper as SwiperTypes } from "swiper/types";
import { ColorType } from "@/app/types/product";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type SwiperCubeProps = {
  images: ColorType[];
  selectedColor: ColorType;
  onColorChange: (color: ColorType) => void;
};

const SwiperCube: FC<SwiperCubeProps> = ({
  images,
  selectedColor,
  onColorChange,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperTypes | null>(null);
  const swiperRef = useRef<SwiperTypes | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const selectedIndex = images.findIndex(
      (img) => img.image === selectedColor.image
    );
    if (selectedIndex !== -1 && swiperRef.current) {
      swiperRef.current.slideTo(selectedIndex);
      setActiveIndex(selectedIndex);
    }
    if (thumbsSwiper) {
      thumbsSwiper.slideTo(selectedIndex, 300, false); // 👈 center thumbs swiper manually
    }
  }, [images, selectedColor, thumbsSwiper]);

  const handleOnSwiper = (swiper: SwiperTypes) => {
    swiperRef.current = swiper;

    swiper.on("slideChange", () => {
      const newIndex = swiper.activeIndex;
      const newColor = images[newIndex];
      setActiveIndex(newIndex);
      onColorChange(newColor);

      if (thumbsSwiper) {
        thumbsSwiper.slideTo(newIndex, 300, false); // 👈 also move thumbs when slide changes
      }
    });
  };

  return (
    <div className="border-2 m-2">
      {/* Main Swiper */}
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#001F3F",
            "--swiper-navigation-size": "16px",
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 h-[500px]"
        onSwiper={handleOnSwiper}
      >
        {images.map((image, key) => (
          <SwiperSlide key={key} className="h-full">
            <Image src={image.image} alt={image.name} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Space between main and thumbs */}
      <div className="h-6" />

      {/* Thumbs Swiper */}
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        spaceBetween={10}
        slidesPerView={3}
        centeredSlides={activeIndex !== 0}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper py-6"
      >
        {images.map((image, key) => {
          const isSelected = image.image === selectedColor.image;

          return (
            <SwiperSlide
              key={key}
              className={`border ${
                isSelected
                  ? "border-yellow-600 border-opacity-50 border-2"
                  : "border-yellow-600 border-opacity-15 border-x-0"
              }`}
            >
              <Image src={image.image} alt={image.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperCube;
