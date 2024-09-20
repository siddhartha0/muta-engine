import { memo } from "react";
import { Typography } from "../../units";
import { WhatWeDoData } from "../../constants";
import bg from "../../assets/Vector.png";

export const WhatWeDoSection = memo(() => {
  return (
    <section className="flex flex-col z-10 md:text-center md:gap-10 gap-6  relative lg:py-16 -mt-12 lg:mt-0 md:px-20 px-8">
      <Typography size="heading-lg-rare">What We Do ?</Typography>
      <Typography>
        We provide advanced software protection with our Polymorphic Code
        Engine, ensuring your applications stay secure from piracy, reverse
        engineering, and unauthorized modifications.
      </Typography>

      <div className="md:flex grid grid-cols-1 gap-10">
        {WhatWeDoData.map((data) => (
          <section
            className="flex flex-col gap-8 place-items-center py-12 px-12 rounded-3xl border border-faidsh-grey  shadow-brand shadow-[0_0_0px_1px_rgba(59,130,246,1)] "
            key={data.id}
            style={{
              backgroundImage: `url(${bg})`,
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Typography>{data.content}</Typography>
            <img
              src={data.img}
              alt="pics"
              className="md:h-[280px] md:w-[512px]"
            />
          </section>
        ))}
      </div>
    </section>
  );
});
