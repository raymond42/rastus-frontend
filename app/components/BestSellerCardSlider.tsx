"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import ProductCard from "./ProductCard";

const BestSellerCardSlider = () => {
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
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {[...Array(6)].map((product, key) => (
          <SwiperSlide key={key}>
            {/* <div className="flex flex-col gap-6 mb-60 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] cursor-pointer"> */}
            <div className="pb-20">
              <ProductCard name="Customized Hoodie" price="FRW 25k" />
            </div>
            {/* </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// const BestSellerCardSlider = () => {
//   return (
//     <Swiper
//       modules={[FreeMode, Pagination]}
//       breakpoints={{
//         340: {
//           slidesPerView: 3,
//           spaceBetween: 15,
//         },
//       }}
//       freeMode={true}
//       pagination={{
//         clickable: true,
//       }}
//     >
//       {[...Array(6)].map((_, key) => (
//         <SwiperSlide key={key}>
//           <ProductCard name="Customized Hoodies" price="25k FRW" />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default BestSellerCardSlider;

export default BestSellerCardSlider;
