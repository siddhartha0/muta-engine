import { memo } from "react";
import hero from "../../assets/hero-about.png";
import { Button, Typography } from "../../units";

export const AboutUsHeroSection = memo(() => {
  return (
    <div
      className="z-10"
      style={{
        backgroundImage: `url(${hero})`,
        width: "100%",
        height: "480px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-6 z-10 lg:py-0 md:py-16 lg:px-36 md:px-16 px-8   ">
        <Typography size="heading-lg-rare">Our Mission</Typography>
        <Typography size="body-md-default" className="md:w-[640px]">
          At MutaEngine, our mission is to revolutionize software security by
          providing cutting-edge solutions that protect your software from
          piracy, reverse engineering, and unauthorized modifications. We
          believe in empowering developers and companies to focus on innovation
          while we ensure their intellectual property remains secure.
        </Typography>
        <Button usage="primary-gradient" className="w-[20%]">
          Learn More
        </Button>
      </div>
    </div>
  );
});
