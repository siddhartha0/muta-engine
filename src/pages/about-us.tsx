import { memo } from "react";
import {
  AboutUsHeroSection,
  SecondarySection,
  WhatWeDoSection,
} from "../components";

export const AboutUsPage = memo(() => {
  return (
    <div className="z-10 flex flex-col">
      <AboutUsHeroSection />
      <SecondarySection />
      <WhatWeDoSection />
    </div>
  );
});
