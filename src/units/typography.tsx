import classname from "classnames";
import React from "react";

type HTMLTags =
  | "p"
  | "div"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "section"
  | "article"
  | "header"
  | "footer"
  | "aside";

interface propTypes
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  as?: HTMLTags;
  children: React.ReactNode;
  size?:
    | "heading-lg-default"
    | "heading-lg-mid"
    | "heading-lg-rare"
    | "heading-md-default"
    | "heading-md-mid"
    | "heading-md-rare"
    | "heading-base-default"
    | "heading-base-mid"
    | "heading-base-rare"
    | "heading-sm-default"
    | "heading-sm-mid"
    | "heading-sm-rare"
    | "heading-xsm-default"
    | "heading-xsm-mid"
    | "heading-xsm-rare"
    | "body-lg-default"
    | "body-lg-mid"
    | "body-lg-rare"
    | "body-md-default"
    | "body-md-mid"
    | "body-md-rare"
    | "body-sm-default"
    | "body-sm-mid"
    | "body-sm-rare";

  usage?: "brand" | "default" | "black";
  text?: string;
  className?: string;
}

export const Typography = React.memo(
  ({
    as: Component = "p",
    size = "body-lg-default",
    children,
    usage = "default",
    className,
    text,
    ...other
  }: propTypes) => {
    return (
      <Component
        className={classname(`${className}`, {
          //----------Size & FONT WEIGHT------------//
          //------------- Default or 500px  font with different sizes-----------------//
          "text-[96px] font-medium": size == "heading-lg-default",
          "text-[65px] font-medium": size == "heading-md-default",
          "text-[50px] font-medium": size === "heading-sm-default",
          "text-[40px] font-medium": size === "heading-base-default",
          "text-[28px] font-medium": size === "heading-xsm-default",
          "text-[22px] font-medium": size === "body-lg-default",
          "text-[20px] font-medium": size === "body-md-default",
          "text-[18px] font-medium": size === "body-sm-default",
          //-------------End of Default or 500px  font-----------------//

          //------------- Mid or 600px  & font with different sizes-----------------//
          "text-[96px] font-semibold": size == "heading-lg-mid",
          "text-[65px] font-semibold": size == "heading-md-mid",
          "text-[50px] font-semibold": size === "heading-sm-mid",
          "text-[40px] font-semibold": size === "heading-base-mid",

          "text-[28px] font-semibold": size === "heading-xsm-mid",
          "text-[22px] font-semibold": size === "body-lg-mid",
          "text-[20px] font-semibold": size === "body-md-mid",
          "text-[18px] font-semibold": size === "body-sm-mid",
          //-------------End of Mid or 600px  font-----------------//

          //------------- Rare or 700px  & font with different sizes-----------------//
          "text-[96px] font-bold": size == "heading-lg-rare",
          "text-[65px] leading-tight font-bold": size == "heading-md-rare",
          "text-[50px] leading-snug font-bold": size === "heading-sm-rare",
          "text-[40px] font-bold": size === "heading-base-rare",

          "text-[28px] font-bold": size === "heading-xsm-rare",
          "text-[22px] font-bold": size === "body-lg-rare",
          "text-[20px] font-bold": size === "body-md-rare",
          "text-[18px] font-bold": size === "body-sm-rare",
          //-------------End of Rare or 700px  font-----------------//
          //--------------------END of Size & FONT WEIGHT-------------------------//

          //----------color------------//
          "text-brand": usage == "brand",
          "text-white": usage == "default",
          "text-black": usage == "black",
          //----------End of color------------//
        })}
        {...other}
      >
        {text || children}
      </Component>
    );
  }
);
