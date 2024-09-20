import { memo } from "react";
import {
  HeroSection,
  Banner,
  CodingSection,
  FeatureSection,
  BottomBanner,
} from "../components";

export const HomePage = memo(() => {
  return (
    <div className="flex relative flex-col">
      <HeroSection />
      <Banner />
      <CodingSection />
      <FeatureSection />
      <BottomBanner />
    </div>
  );
});
