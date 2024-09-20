import { BannerData } from "../../constants";
import { Typography } from "../../units";

export const Banner = () => {
  return (
    <div className="lg:flex md:grid md:grid-cols-2 py-10 z-10 lg:px-36 px-8 gap-4 md:gap-14 place-items-center">
      {BannerData.map((banner) => (
        <section
          className="lg:flex grid md:grid-cols-2  grid-cols-1 gap-2 md:gap-7 md:p-8 lg:p-0 z-10 py-4 md:py-0 w-full md:w-[350px] md:place-items-center"
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
          {banner.id !== 3 && (
            <div className="bg-white w-[1px] h-4 hidden lg:flex" />
          )}
        </section>
      ))}
    </div>
  );
};
