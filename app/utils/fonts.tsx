import { Frank_Ruhl_Libre, Jost } from "next/font/google";

const frankRuhlLibrevBold = Frank_Ruhl_Libre({
  weight: "700",
  subsets: ["latin"],
});

const frankRuhlLibrev = Frank_Ruhl_Libre({
  weight: "400",
  subsets: ["latin"],
});

const jost = Jost({
  weight: "400",
  subsets: ["latin"],
});

const jostSemiBold = Jost({
  weight: "500",
  subsets: ["latin"],
});

export { frankRuhlLibrev, frankRuhlLibrevBold, jost, jostSemiBold };
