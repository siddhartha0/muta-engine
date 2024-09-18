import { memo } from "react";
import { Button, Typography } from "../../units";

export const BottomBanner = memo(() => {
  return (
    <div className="rounded-3xl flex place-items-center py-12 px-36 bg-gradient-to-br from-faidsh-grey justify-between w-[80%] via-ternary to-black m-auto">
      <section className="flex flex-col gap-8 w-[70%]">
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
