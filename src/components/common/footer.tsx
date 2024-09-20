import { memo } from "react";
import logo from "../../assets/companylogo.png";
import { FooterData, FooterIcon } from "../../constants/";
import { Typography } from "../../units";
import { Icon } from "@iconify/react/dist/iconify.js";

export const Footer = memo(() => {
  return (
    <div className="flex z-10 flex-col gap-12 lg:py-12 mt-20 md:px-20 px-8">
      <section className="lg:flex  z-10 justify-between">
        <img src={logo} alt="pics" />
        <div className="grid lg:grid-cols-6 mt-8 lg:mt-0 md:grid-cols-3 grid-cols-2  gap-8 z-10">
          {FooterData.map((footer) => (
            <Typography size="body-sm-default" key={footer.id}>
              {footer.title}{" "}
            </Typography>
          ))}
        </div>
      </section>
      <hr className="bg-fadish-white w-full z-10 h-[2px]" />
      <section className="md:flex    justify-between z-10 place-items-center">
        <Typography size="body-sm-default">
          MutaEngine @ 2024. All rights reserved.
        </Typography>

        <div className="flex gap-8 mt-6 md:mt-0 place-items-center">
          {FooterIcon.map((icon) => (
            <Icon icon={icon.icon} key={icon.id} color="white" />
          ))}
        </div>
      </section>
    </div>
  );
});
