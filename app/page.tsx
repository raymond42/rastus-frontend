import {
  About,
  BestSeller,
  DealOfTheDay,
  Hero,
  NewCollection,
  OurProducts,
  WhatPeopleSay,
} from "./components";

export default function Home() {
  return (
    <>
      <Hero />
      <NewCollection />
      <About />
      <BestSeller />
      <OurProducts />
      <DealOfTheDay />
      <WhatPeopleSay />
    </>
  );
}
