// import React from "react";
// import { frankRuhlLibrev, frankRuhlLibrevBold } from "../utils/fonts";
// import CardSlider from "./CardSlider";

// const WhatPeopleSay = () => {
//   return (
//     <div className="max-h-screen">
//       <div className="w-full flex gap-5 flex-col justify-center items-center p-10">
//         <h1
//           className={`${frankRuhlLibrevBold.className} text-[48px] text-primary`}
//         >
//           What People Say About Us
//         </h1>
//         <p
//           className={`${frankRuhlLibrev.className} text-[20px] leading-[180%]`}
//         >
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//           ullamcorper congue eros
//         </p>
//       </div>
//       <div className="px-4 sm:px-0">
//         <CardSlider />
//       </div>
//     </div>
//   );
// };

// export default WhatPeopleSay;

import React from "react";
import { frankRuhlLibrev, frankRuhlLibrevBold } from "../utils/fonts";
import CardSlider from "./CardSlider";

const WhatPeopleSay = () => {
  return (
    <div className="max-h-screen flex flex-col items-center px-4 sm:px-8 lg:px-16">
      <div className="w-full flex flex-col gap-5 items-center text-center py-10">
        <h1
          className={`${frankRuhlLibrevBold.className} text-[32px] sm:text-[40px] lg:text-[48px] text-primary`}
        >
          What People Say About Us
        </h1>
        <p
          className={`${frankRuhlLibrev.className} text-[16px] sm:text-[18px] lg:text-[20px] leading-[180%] max-w-2xl`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper congue eros.
        </p>
      </div>
      <div className="w-full pb-10">
        <CardSlider />
      </div>
    </div>
  );
};

export default WhatPeopleSay;
