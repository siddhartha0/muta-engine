import { memo } from "react";
import { Button, Typography } from "../../units";
import { Icon } from "@iconify/react/dist/iconify.js";

type Feature = {
  id: number;
  title: string;
  content: string;
  icon: string;
};

interface propTypes {
  header: string;
  content: string;
  features: Feature[];
}

export const FeatureLayout = memo(
  ({ header, content, features }: propTypes) => {
    return (
      <div className="grid md:grid-cols-2 justify-between gap-16 relative py-16 px-36">
        <section className="flex flex-col gap-12 z-10">
          <Typography size="heading-base-mid">{header}</Typography>

          <Typography size="body-sm-default">{content}</Typography>
          <Button className="w-[20%]">Get Started</Button>
        </section>

        <section className="flex flex-col z-10 gap-12">
          {features.map((feature) => (
            <div className="flex gap-5 z-10 w-full" key={feature.id}>
              <Icon
                icon={feature.icon}
                fontSize={28}
                height={52}
                width={160}
                className="text-brand bg-default  rounded-full "
              />

              <section className="flex flex-col gap-3">
                <Typography size="body-md-rare">{feature.title}</Typography>
                <Typography size="body-sm-default">
                  {feature.content}
                </Typography>
              </section>
            </div>
          ))}

          <div className="w-[380px] absolute  -top-36  right-0  h-[650px] bg-gradient-to-br from-secondary  via-default to-base -z-[-1] blur-2xl" />
        </section>
      </div>
    );
  }
);
