import {
  About,
  BestSeller,
  DealOfTheDay,
  Footer,
  Hero,
  NewCollection,
  OurProducts,
  // WhatPeopleSay,
} from "./components/index";

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
