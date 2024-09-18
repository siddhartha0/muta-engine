import coding from "../../assets/code-img.png";
import { CodeContent } from "../../constants";
import { Button, Typography } from "../../units";

export const CodingSection = () => {
  return (
    <div className="flex relative flex-col z-10 ">
      <section className="py-16 z-10 px-60 flex place-self-center">
        <img src={coding} alt="code" className="w-[700px] " />
      </section>

      <section className="flex flex-col gap-16 z-10 py-16 px-20">
        {CodeContent.map((code) => (
          <div key={code.id} className="flex z-10 place-items-center gap-20">
            <img
              src={code.img}
              alt="img"
              style={{
                order: code.imgorder,
                zIndex: 999,
              }}
            />

            <div
              className={`flex flex-col z-10 py-8 gap-16 ${
                code.descOrder === 1 ? "place-items-end text-end" : ""
              } `}
              style={{
                order: code.descOrder,
              }}
            >
              <Typography size="heading-base-rare">{code.title}</Typography>
              <Typography size="body-md-default"> {code.content}</Typography>
              <Button usage="primary-gradient" className="w-[20%] ">
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </section>

      <div className="w-[350px] absolute  top-40  left-0  h-[1080px] bg-gradient-to-br from-secondary  via-primary to-primary -z-[-1] blur-2xl" />
    </div>
  );
};
