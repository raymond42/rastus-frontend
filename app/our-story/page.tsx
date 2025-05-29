import React from "react";
import { Metadata } from "next";
import { Footer, OurStory } from "@/app/components";

export const metadata: Metadata = {
  title: "Our Story - Rastus",
  description:
    "Discover the story behind Rastus — where creativity meets customized fashion in Rwanda.",
};

const OurStoryPage = () => {
  return (
    <main>
      <OurStory />
      <Footer />
    </main>
  );
};

export default OurStoryPage;
