import { memo } from "react";
import { Button, Typography } from "../../units";

export const BottomBanner = memo(() => {
  return (
    <div className="rounded-3xl md:flex grid md:gap-10 gap-5 place-items-center md:py-12 md:px-36 py-8 px-4 bg-gradient-to-br from-faidsh-grey justify-between w-[80%] via-ternary to-black m-auto">
      <section className="flex flex-col md:gap-8 gap-5 w-full md:w-[70%]">
        <Typography
          as="div"
          size="heading-base-default"
          className="inline-block"
        >
          Ready to
          <Typography
            className="inline-block ml-2 mr-2"
            size="heading-base-default"
            usage="brand"
          >
            Secure
          </Typography>
          Your Software?
        </Typography>
        <Typography size="body-sm-default">
          Get started with MutaEngine today and protect your software with the
          most advanced security technology available.
        </Typography>
      </section>
      <Button>Start Now</Button>
    </div>
  );
});
