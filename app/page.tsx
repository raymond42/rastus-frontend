import React from "react";
import {
  About,
  BestSeller,
  DealOfTheDay,
  Footer,
  Hero,
  NewCollection,
  OurProducts,
  // WhatPeopleSay,
} from "@/components/features";

export default function Home() {
  return (
    <>
      <Hero />
      <NewCollection />
      <About />
      <BestSeller />
      <OurProducts />
      <DealOfTheDay />
      {/* <WhatPeopleSay /> */}
      <Footer />
    </>
  );
}
