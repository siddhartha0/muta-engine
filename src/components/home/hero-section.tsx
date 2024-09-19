import { memo } from "react";
import { Button, Typography } from "../../units";
import hero from "../../assets/Bubble_hero.png";

export const HeroSection = memo(() => {
  return (
    <div className="flex  relative lg:py-16 py-8 px-16 justify-between  place-items-center">
      <section id="content" className=" z-10 flex w-[715px]  flex-col gap-10">
        <Button usage="primary-gradient" className="w-[50%]">
          Protecting code, Preserving Innovation
        </Button>

        <Typography as="div" size="heading-sm-rare">
          Revolutionizing
          <Typography size="heading-sm-rare">Software Security with</Typography>
          <Typography
            size="heading-sm-rare"
            className="inline-block mr-4"
            usage="brand"
          >
            Dynamic
          </Typography>
          Mutation
        </Typography>

        <Typography>
          Introducing the Polymorphic Code Engine - A New Era in Protecting Your
          Software.
        </Typography>

        <div className="flex place-items-center gap-8">
          <Button size="small">Learn More</Button>
          <Button usage="primary-gradient">Start Now</Button>
        </div>
      </section>

      <section id="bubble" className="hidden md:flex">
        <img src={hero} alt="hero" />
      </section>
    </div>
  );
});
