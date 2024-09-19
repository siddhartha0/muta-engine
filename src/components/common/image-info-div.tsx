import { memo } from "react";
import { Button, Typography } from "../../units";

interface propTypes {
  img: string;
  imgorder: number;
  descOrder: number;
  title: string;
  content: string;
}

export const ImageInfoDiv = memo(
  ({ content, descOrder, img, imgorder, title }: propTypes) => {
    return (
      <div className="grid md:grid-cols-2 z-10 place-items-center gap-20">
        <img
          src={img}
          alt="img"
          style={{
            order: imgorder,
            zIndex: 999,
          }}
        />

        <div
          className={`flex flex-col z-10 py-8 gap-16 ${
            descOrder === 1 ? "md:place-items-end md:text-end" : ""
          } `}
          style={{
            order: descOrder,
          }}
        >
          <Typography size="heading-base-rare">{title}</Typography>
          <Typography size="body-sm-default"> {content}</Typography>
          <Button usage="primary-gradient" className="w-[20%] ">
            Learn More
          </Button>
        </div>
      </div>
    );
  }
);
