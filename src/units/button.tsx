import React from "react";
import classnames from "classnames";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?:
    | "medium-md"
    | "medium-xl"
    | "medium-lg"
    | "small-md"
    | "small-xl"
    | "small-lg";

  usage?:
    | "brand"
    | "click"
    | "primary"
    | "default"
    | "primary-gradient"
    | "info";
  outline?: "brand" | "primary" | "none";
  className?: string;
}

export const Button = React.memo(
  ({
    children,
    className,
    size = "medium-md",
    usage = "default",
    outline = "brand",
    ...other
  }: ButtonProps): JSX.Element => {
    return (
      <button
        className={classnames(
          `${className} flex place-items-center justify-center gap-3   font-medium leading-7 min-w-[140px] `,

          {
            //--------- Padding && Border Radius ------------//

            //--------12px(t,b) 24px(r,l) padding with different border radius---------
            "py-3 px-6 rounded-[10px]": size === "medium-md",
            "py-3 px-6 rounded-[24px]": size === "medium-lg",
            "py-3 px-6 rounded-[26px]": size === "medium-xl",
            //--------End of 12px(t,b) 24px(r,l) padding with different border radius---------

            //--------8px(t,b) 12px(r,l) padding with different border radius---------
            "py-2 px-3 rounded-[10px]": size === "small-md",
            "py-2 px-3 rounded-[24px]": size === "small-lg",
            "py-2 px-3 rounded-[26px]": size === "small-xl",
            //--------End of 8px(t,b) 12px(r,l) padding with different border radius---------

            //--------- End of Padding && Border Radius------------//

            //--------- Background Color------------//
            "bg-black-1000 text-white ": usage === "default",
            "bg-primary-500 text-primary-1000 ": usage === "primary",
            "bg-primary-800 text-white ": usage === "info",
            "bg-dark-blue text-black-100 ": usage === "brand",
            "bg-white text-primary-700 ": usage === "click",
            "hover:bg-white bg-gradient-to-r from-fadish-blue to-fade-blue text-white  ":
              usage === "primary-gradient",
            //--------- End of Background Color------------//

            //--------- Border------------//
            "border border-brand": outline === "brand",
            "border border-primary-800": outline === "primary",
            "border-none": outline === "none",
            //--------- End of Border------------//
          }
        )}
        {...other}
      >
        {children}
      </button>
    );
  }
);
