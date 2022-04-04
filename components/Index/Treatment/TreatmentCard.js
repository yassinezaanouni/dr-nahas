import Image from "next/image";
import { useState } from "react";
const TreatmentCard = ({ title, image, icon }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  return (
    <>
      {isFullScreen && (
        <div
          className="overlay f-ai-c fixed inset-0 z-20 justify-center bg-black/80 backdrop-blur-sm "
          onClick={() => setIsFullScreen(false)}
        >
          <Image src={image} alt="title" height="780" width="715" />
        </div>
      )}
      <div
        className={`group relative cursor-pointer `}
        onClick={() => setIsFullScreen(!isFullScreen)}
      >
        <div className="relative -z-10 h-[16.45rem] w-[15rem] overflow-hidden rounded-xl lg:h-[25.25rem]  lg:w-[23.125rem]">
          <Image src={image} alt="title" layout={"fill"} />
        </div>
        <div className="absolute right-4 top-4 opacity-0  transition-all duration-700 group-hover:opacity-100">
          <Image
            src={"/icons/treatment/plus.svg"}
            alt="title"
            height="48"
            width="48"
          />
        </div>

        <div>
          <div className="card f-ai-c absolute inset-x-5 bottom-5  gap-4 rounded-lg bg-white p-2 opacity-0 transition-all duration-500 group-hover:opacity-100 md:gap-8">
            <div className="f-ai-c aspect-square w-[2.5rem] justify-center rounded-2xl bg-[#E3F8FF] p-2 md:w-[3.75rem]">
              <div className=" f-ai-c aspect-square w-20 justify-center rounded-full bg-primary/20 ">
                <Image src={icon} alt="title" width="20" height="21" />
              </div>
            </div>
            <h3 className="font-black text-primary">{title}</h3>
          </div>
        </div>
        <style jsx>
          {`
            @media (hover: none) {
              .card {
                transform: translateY(100% + 1.25rem);
              }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default TreatmentCard;
