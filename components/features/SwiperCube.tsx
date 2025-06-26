"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ColorType } from "@/app/types/product";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const selectedIndex = images.findIndex(
      (img) => img.image === selectedColor.image
    );
    if (selectedIndex !== -1) {
      setActiveIndex(selectedIndex);
      scrollToThumbnail(selectedIndex);
    }
  }, [selectedColor, images]);

  const scrollToThumbnail = (index: number) => {
    if (thumbsRef.current) {
      const container = thumbsRef.current;
      const child = container.children[index] as HTMLElement;
      if (child) {
        container.scrollTo({
          left:
            child.offsetLeft -
            container.clientWidth / 2 +
            child.clientWidth / 2,
          behavior: "smooth",
        });
      }
    }
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < images.length) {
      setActiveIndex(index);
      onColorChange(images[index]);
      scrollToThumbnail(index);
    }
  };

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="relative h-[400px] w-full flex items-center justify-center bg-white overflow-hidden rounded-md">
        <Image
          src={images[activeIndex].image}
          alt={images[activeIndex].name}
          fill
          className="object-contain"
        />

        {/* Prev Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => goToSlide(activeIndex - 1)}
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 hover:bg-white shadow-md"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </Button>

        {/* Next Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => goToSlide(activeIndex + 1)}
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 hover:bg-white shadow-md"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </Button>
      </div>

      {/* Spacer */}
      <div className="h-3 sm:h-4" />

      {/* Thumbnails */}
      <div className="relative px-2">
        <div
          ref={thumbsRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth gap-2"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {images.map((image, index) => {
            const isSelected = image.image === selectedColor.image;

            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-none w-1/3 aspect-square p-1 transition-all ${
                  isSelected
                    ? "border-2 border-primary border-opacity-50"
                    : "border border-primary border-opacity-15"
                }`}
                style={{ scrollSnapAlign: "center" }}
              >
                <Image
                  src={image.image}
                  alt={image.name}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SwiperCube;
