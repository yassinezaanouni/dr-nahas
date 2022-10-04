import Image from "next/image";
import Treatment from "../Index/Treatment/Treatment";
import { useTranslation } from "next-i18next";
import MyVideo from "../Widgets/MyVideo";
import TreatmentCard from "../Index/Treatment/TreatmentCard";

export const GalleryPhotos = () => {
  const { t } = useTranslation("common");
  return (
    <section className=" gap-5 text-center">
      <h1 className="relative  mx-auto mb-8 max-w-[25ch]  md:mb-12">
        <div className="  absolute -z-10  translate-y-1/2 translate-x-1/2 	">
          <Image src="/widgets/points.svg" alt="" width="143" height={"105"} />
        </div>
        {t("g1")}
        <div className="absolute bottom-1/2 right-1/4 -z-10 h-32 w-32 translate-y-1/2 rounded-full bg-primary blur-[150px] md:blur-[100px]"></div>
      </h1>
      <div className="relative z-20 mx-auto w-full overflow-hidden rounded-2xl">
        <MyVideo url="/home.mp4#t=2" />
      </div>

      {/* Smiles */}
      <section className="f-ai-c flex-col">
        <div className={` my-12 mt-0 text-center`}>
          <h2 className="mb-4">{t("smileh1")}</h2>
          <p className="text-light">{t("smilep")}</p>
        </div>
        <div className="f-ai-c flex-wrap justify-center gap-8">
          <TreatmentCard image="/img/faces/1.webp" icon={"/icons/treatment/treatment2.svg"} title="Better smile" />{" "}
          <TreatmentCard image="/img/faces/2.webp" icon={"/icons/treatment/treatment2.svg"} title="White smile" />{" "}
          <TreatmentCard image="/img/faces/3.webp" icon={"/icons/treatment/treatment2.svg"} title="White smile" />{" "}
        </div>
      </section>

      <Treatment isVideo={false} />

      <h2 className="mb-6 mt-8 md:mb-16 md:mt-24">
        {t("g2").split(" ").slice(0, 1).join(" ")}
        <span> {t("g2").split(" ").slice(1, t("g2").length).join(" ")} </span>
      </h2>
      <div className="imgs-container  ">
        <div className="relative mx-auto h-[8.125rem] w-full justify-center overflow-hidden rounded-xl sm:h-[14.125rem] lg:col-span-2 xl:h-[20.5625rem] macbook:h-[22.5625rem]">
          <Image src="/img/gallery/1.webp" alt="clinic dentist" layout="fill" />
        </div>
        <div className="relative mx-auto h-[8.125rem] w-full justify-center overflow-hidden rounded-xl sm:h-[14.125rem] lg:col-span-5 xl:h-[20.5625rem] macbook:h-[22.5625rem]">
          <Image src="/img/gallery/2.webp" alt="clinic dentist" layout="fill" />
        </div>
        <div className="relative mx-auto h-[8.125rem] w-full justify-center overflow-hidden rounded-xl sm:h-[14.125rem] lg:col-span-3 xl:h-[20.5625rem] macbook:h-[22.5625rem]">
          <Image src="/img/gallery/5.webp" alt="clinic dentist" layout="fill" />
        </div>{" "}
        <div className="lg:col-span-[1.5] relative mx-auto h-[8.125rem] w-full justify-center overflow-hidden rounded-xl sm:h-[14.125rem] lg:col-span-2 xl:h-[20.5625rem] macbook:h-[22.5625rem]">
          <Image src="/img/gallery/3.webp" alt="clinic dentist" layout="fill" />
        </div>
        <div className="relative mx-auto h-[8.125rem] w-full  justify-center overflow-hidden rounded-xl sm:h-[14.125rem] lg:col-span-2 xl:h-[20.5625rem] macbook:h-[22.5625rem]">
          <Image src="/img/gallery/4.webp" alt="clinic dentist" layout="fill" />
        </div>
      </div>
      <style jsx>
        {`
          .imgs-container {
            @apply grid gap-3 sm:gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-7;
          }
        `}
      </style>
    </section>
  );
};
