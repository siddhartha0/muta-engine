import { memo } from "react";
import { Button, Typography } from "../../units";
import { BottomData, BottomSectionCodeData } from "../../constants";
import { ImageInfoDiv } from "../";

export const BottomSection = memo(() => {
  return (
    <div className="flex flex-col gap-5 md:gap-12 place-items-center lg:py-16 lg:px-20 px-12">
      <Typography size="heading-base-rare">Why Choose MutaEngine ?</Typography>
      <section className="md:flex grid gap-12 ">
        {BottomData.map((data) => (
          <div
            className="flex flex-col border border-brand rounded-xl py-6 px-4 text-center gap-4 shadow-brand shadow-[0_1px_2px_1px_rgba(59,130,246,1)]"
            key={data.id}
          >
            <img src={data.img} alt="" />
            <Typography size="body-lg-rare">{data.title}</Typography>
            <Typography size="body-sm-default">{data.content}</Typography>
          </div>
        ))}
      </section>

      <section className="md:py-16 flex md:gap-20 gap-5">
        <ImageInfoDiv
          content={BottomSectionCodeData.content}
          descOrder={BottomSectionCodeData.descOrder}
          img={BottomSectionCodeData.img}
          imgorder={BottomSectionCodeData.imgorder}
          title={BottomSectionCodeData.title}
        />
      </section>

      <div className="rounded-3xl md:flex grid md:gap-8 gap-2 place-items-center py-10  md:px-16 px-2   bg-gradient-to-br from-faidsh-grey justify-between md:w-[80%] via-ternary to-black md:m-auto">
        <section className="flex flex-col md:gap-6 gap-2 w-[70%] ">
          <Typography
            as="div"
            size="heading-base-default"
            className="inline-block"
          >
            Get In Touch
          </Typography>
          <Typography size="body-sm-default">
            Have questions or want to learn more about how MutaEngine can
            protect your software? We’d love to hear from you. Provide contact
            information, social media links, and a contact form.
          </Typography>
        </section>
        <Button>Contact us</Button>
      </div>
    </div>
  );
});
