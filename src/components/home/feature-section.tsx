import { memo } from "react";
import { Button, Typography } from "../../units";
import { Features } from "../../constants";
import { Icon } from "@iconify/react/dist/iconify.js";

export const FeatureSection = memo(() => {
  return (
    <div className="flex justify-between gap-16 relative py-16 px-36">
      <section className="flex flex-col gap-12 z-10">
        <Typography size="heading-base-mid">
          You Innovate, We Secure.
        </Typography>

        <Typography size="body-sm-default">
          With MutaEngine, you can focus on creating cutting-edge software while
          we ensure it stays protected from threats. Our advanced technology
          keeps your intellectual property safe, allowing you to concentrate on
          what you do best.
        </Typography>
        <Button className="w-[20%]">Get Started</Button>
      </section>

      <section className="flex flex-col z-10 gap-12">
        {Features.map((feature) => (
          <div className="flex gap-5 z-10 w-full">
            <Icon
              icon={feature.icon}
              fontSize={28}
              height={52}
              width={160}
              className="text-brand bg-default  rounded-full "
            />

            <section className="flex flex-col gap-3">
              <Typography size="body-md-rare">{feature.title}</Typography>
              <Typography size="body-sm-default">{feature.content}</Typography>
            </section>
          </div>
        ))}

        <div className="w-[380px] absolute  -top-36  right-0  h-[650px] bg-gradient-to-br from-secondary  via-default to-base -z-[-1] blur-2xl" />
      </section>
    </div>
  );
});
