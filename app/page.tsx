import {
  About,
  BestSeller,
  DealOfTheDay,
  Hero,
  NewCollection,
  OurProducts,
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
    </>
  );
}
