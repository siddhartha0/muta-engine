import { BannerData } from "../../constants";
import { Typography } from "../../units";

export const Banner = () => {
  return (
    <div className="flex py-12 z-10 px-36 gap-14 place-items-center">
      {BannerData.map((banner) => (
        <section
          className="flex gap-7 z-10  place-items-center"
          key={banner.id}
        >
          <Typography size="heading-base-mid">{banner.amount}</Typography>
          <Typography
            size="body-md-default"
            className="uppercase"
            usage="brand"
          >
            {banner.title}
          </Typography>
          {banner.id !== 3 && <div className="bg-white w-[1px] h-4" />}
        </section>
      ))}
    </div>
  );
};
