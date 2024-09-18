import React from "react";
import classnames from "classnames";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "small" | "default";
  usage?: "brand" | "primary-gradient";
  className?: string;
}

export const Button = React.memo(
  ({
    children,
    className,
    size = "small",
    usage = "brand",
    ...other
  }: ButtonProps): JSX.Element => {
    return (
      <button
        className={classnames(
          `${className} flex place-items-center justify-center gap-3   font-medium leading-7 min-w-[120px] `,

          {
            //--------- Padding && Border Radius ------------//
            "p-2 rounded-[15px] text-sm": size === "small",
            "p-4 rounded-[15px]": size === "default",
            //--------- End of Padding && Border Radius------------//

            //--------- Background Color------------//
            "bg-brand text-black ": usage === "brand",
            "bg-black text-white border  border-brand drop-shadow-xl shadow-xl   ":
              usage === "primary-gradient",
            //--------- End of Background Color------------//
          }
        )}
        {...other}
      >
        {children}
      </button>
    );
  }
);
