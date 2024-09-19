import { memo } from "react";
import {
  AboutFeatureSection,
  AboutUsHeroSection,
  BottomSection,
  SecondarySection,
  WhatWeDoSection,
} from "../components";

export const AboutUsPage = memo(() => {
  return (
    <div className="z-10 flex flex-col">
      <AboutUsHeroSection />
      <SecondarySection />
      <WhatWeDoSection />
      <AboutFeatureSection />
      <BottomSection />
    </div>
  );
});
