import coding from "../../assets/code-img.png";
import { CodeContent } from "../../constants";
import { ImageInfoDiv } from "../common/image-info-div";

export const CodingSection = () => {
  return (
    <div className="flex  relative flex-col z-10 ">
      <section className="py-16 z-10 px-60 flex place-self-center">
        <img src={coding} alt="code" className="w-[700px] hidden md:flex " />
      </section>

      <section className="flex flex-col gap-14 md:gap-24  z-10 md:py-16 md:mt-0 -mt-28 md:px-20 px-8">
        {CodeContent.map((code) => (
          <ImageInfoDiv
            content={code.content}
            descOrder={code.descOrder}
            img={code.img}
            imgorder={code.imgorder}
            title={code.title}
            key={code.id}
          />
        ))}
      </section>

      <div className="md:w-[350px] w-[50px] absolute  top-40  left-0  h-[1080px] bg-gradient-to-br from-secondary  via-primary to-primary -z-[-1] blur-2xl" />
    </div>
  );
};
