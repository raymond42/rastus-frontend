import {
  About,
  BestSeller,
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
    </>
  );
}
