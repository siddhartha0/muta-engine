import { memo } from "react";
import { Button, Typography } from "../../units";
import hero from "../../assets/Bubble_hero.png";

export const HeroSection = memo(() => {
  return (
    <div className="flex  relative lg:py-16 py-2 md:px-16 px-8 justify-between  place-items-center">
      <section
        id="content"
        className="z-10 flex md:w-[715px] flex-col md:gap-10 gap-5"
      >
        <Button usage="primary-gradient" className="md:w-[50%] w-[80%]">
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

        <div className="flex place-items-center md:gap-8 gap-4">
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
