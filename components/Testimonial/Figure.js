import React from "react";
import FloatingCard from "../Widgets/Index/FloatingCard";
import Rating from "../Widgets/Rating";
import Connection from "./Connection";
import Image from "next/legacy/image";

const Figure = ({ author, text, rating, image }) => {
  return (
    <figure className=" f-ai-c lg: text-start  flex-wrap justify-center gap-8 text-center lg:justify-between">
      <figcaption>
        <blockquote>
          <h2 className="relative max-w-[22ch] lg:max-w-[14ch] macbook:max-w-[22ch]">
            {text.split(" ").slice(0, 2).join(" ")}
            <span> {text.split(" ").slice(2, 4).join(" ")} </span>
            {text.split(" ").slice(4, text.length).join(" ")}

            <div className="absolute bottom-1/2 left-0 z-20 h-28 w-28 translate-y-1/2 rounded-full bg-primary blur-[150px] md:blur-[100px]"></div>
          </h2>
        </blockquote>
        <div className="f-ai-c mt-6 flex-wrap justify-center gap-x-8 md:mt-16 lg:mt-36 lg:justify-start">
          <Rating value={rating} tw={""} />
          <p className="font-black">{author}</p>
        </div>
      </figcaption>
      <div className="relative  ">
        <Connection tw="hidden xsm:block" />
        <FloatingCard
          icon="/icons/quote.svg"
          number={"1K"}
          text="Positive Review"
          isInverted={true}
          tw={"absolute text-bold top-[70%] md:top-[60%] right-0 text-primary z-20 md:translate-x-1/4"}
          tw2={"absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2  w-[36px] aspect-square md:w-[51px] "}
        />
        <div className="  absolute right-0   translate-x-1/2 -translate-y-1/2	">
          <Image src="/widgets/points.svg" alt="" width="143" height={"105"} />
        </div>
        <div className="relative z-10 overflow-hidden rounded-2xl rounded-tl-[8rem]">
          <Image src={image} alt="tesetimonial" width="472" height="484" priority={true} />
        </div>
        <div className="  absolute left-0  -translate-x-1/2 -translate-y-1/2 	">
          <Image src="/widgets/points.svg" alt="" width="143" height={"105"} />
        </div>
      </div>
    </figure>
  );
};

export default Figure;
