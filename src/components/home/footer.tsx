import { memo } from "react";
import logo from "../../assets/companylogo.png";
import { FooterData, FooterIcon } from "../../constants/footer-data";
import { Typography } from "../../units";
import { Icon } from "@iconify/react/dist/iconify.js";

export const Footer = memo(() => {
  return (
    <div className="flex flex-col gap-12 py-12 mt-20 px-20">
      <section className="flex justify-between">
        <img src={logo} alt="pics" />
        <div className="flex gap-8">
          {FooterData.map((footer) => (
            <Typography size="body-sm-default" key={footer.id}>
              {footer.title}{" "}
            </Typography>
          ))}
        </div>
      </section>
      <hr className="bg-fadish-white w-full h-[2px]" />
      <section className="flex justify-between place-items-center">
        <Typography size="body-sm-default">
          MutaEngine @ 2024. All rights reserved.
        </Typography>

        <div className="flex gap-8 place-items-center">
          {FooterIcon.map((icon) => (
            <Icon icon={icon.icon} key={icon.id} color="white" />
          ))}
        </div>
      </section>
    </div>
  );
});
