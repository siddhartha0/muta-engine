import { memo } from "react";
import { Features } from "../../constants";
import { FeatureLayout } from "../";

export const FeatureSection = memo(() => {
  return (
    <FeatureLayout
      header="You Innovate, We Secure."
      content="With MutaEngine, you can focus on creating cutting-edge software while
          we ensure it stays protected from threats. Our advanced technology
          keeps your intellectual property safe, allowing you to concentrate on
          what you do best."
      features={Features}
    />
  );
});
