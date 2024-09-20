import { memo } from "react";
import { Typography } from "../../units";
import { SecondarySectionContent } from "../../constants";

export const SecondarySection = memo(() => {
  return (
    <section className="flex flex-col z-10 md:text-center gap-5 relative py-16 lg:px-20 md:px-16 p-8 ">
      <Typography size="heading-lg-rare">Who We Are</Typography>

      <div className="flex flex-col md:gap-16 gap-4 lg:w-full z-10 ">
        {SecondarySectionContent.map((code) => (
          <section
            key={code.id}
            className="lg:flex z-10 place-items-center  gap-20"
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
              className={`flex flex-col z-10 py-8 gap-16 lg:text-start md:text-center text-start`}
              style={{
                order: code.descOrder,
              }}
            >
              <Typography size="body-md-default"> {code.content}</Typography>
            </div>
          </section>
        ))}
      </div>

      <div className="md:w-[550px] w-[50px] absolute  top-60  left-0  h-[1580px] bg-gradient-to-br from-secondary rounded-full  via-primary to-primary -z-[-1] blur-2xl" />
    </section>
  );
});
