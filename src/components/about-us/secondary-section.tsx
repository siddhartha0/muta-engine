import { memo } from "react";
import { Typography } from "../../units";
import { SecondarySectionContent } from "../../constants";

export const SecondarySection = memo(() => {
  return (
    <section className="flex flex-col z-10 text-center gap-5 relative py-16 px-20">
      <Typography size="heading-lg-rare">Who We Are</Typography>

      <div className="flex flex-col gap-16 z-10 ">
        {SecondarySectionContent.map((code) => (
          <section
            key={code.id}
            className="flex z-10 place-items-center gap-20"
          >
            <img
              src={code.img}
              alt="img"
              style={{
                order: code.imgorder,
                zIndex: 999,
              }}
            />

            <div
              className={`flex flex-col z-10 py-8 gap-16 text-start`}
              style={{
                order: code.descOrder,
              }}
            >
              <Typography size="body-md-default"> {code.content}</Typography>
            </div>
          </section>
        ))}
      </div>

      <div className="w-[550px] absolute  top-60  left-0  h-[1580px] bg-gradient-to-br from-secondary rounded-full  via-primary to-primary -z-[-1] blur-2xl" />
    </section>
  );
});
