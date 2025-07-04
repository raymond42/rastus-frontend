import React from "react";
import {
  About,
  DealOfTheDay,
  Footer,
  Hero,
  NewCollection,
  OurProducts,
  // WhatPeopleSay,
} from "@/components/features";
import HeavenlyHits from "@/components/features/HeavenlyHits";

export default function Home() {
  return (
    <>
      <Hero />
      <NewCollection />
      <About />
      <HeavenlyHits />
      <OurProducts />
      <DealOfTheDay />
      {/* <WhatPeopleSay /> */}
      <Footer />
    </>
  );
}
