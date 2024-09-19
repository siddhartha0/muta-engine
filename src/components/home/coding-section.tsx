import coding from "../../assets/code-img.png";
import { CodeContent } from "../../constants";
import { ImageInfoDiv } from "../common/image-info-div";

export const CodingSection = () => {
  return (
    <div className="flex relative flex-col z-10 ">
      <section className="py-16 z-10 px-60 flex place-self-center">
        <img src={coding} alt="code" className="w-[700px] " />
      </section>

      <section className="flex flex-col gap-16 z-10 py-16 px-20">
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

      <div className="w-[350px] absolute  top-40  left-0  h-[1080px] bg-gradient-to-br from-secondary  via-primary to-primary -z-[-1] blur-2xl" />
    </div>
  );
};
