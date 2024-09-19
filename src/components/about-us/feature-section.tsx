import { memo } from "react";
import { FeatureLayout } from "../";
import { AboutFeatures } from "../../constants";

export const AboutFeatureSection = memo(() => {
  return (
    <FeatureLayout
      header="Our Values"
      content="We are driven by innovation, integrity, excellence, and a customer-centric approach to deliver unparalleled software security solutions."
      features={AboutFeatures}
    />
  );
});
