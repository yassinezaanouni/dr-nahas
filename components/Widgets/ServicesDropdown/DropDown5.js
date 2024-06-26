import Image from "next/legacy/image";
import { useTranslation } from "next-i18next";

const DropDown5 = () => {
  const { t } = useTranslation("dropDown5");
  return (
    <div className="f-ai-c  text-start  mt-12 flex-col gap-12 md:gap-16 lg:mt-20 lg:gap-16">
      <div className="flex-container">
        <div className="left">
          <h2 className="text-primary">{t("h1")}</h2>
          <p>{t("p1")}</p>
          <p className="text-[#F89B1B]">{t("p2")}</p>
          <p>{t("p3")}</p> <p className="text-[#F89B1B]">{t("p4")}</p>
          <p>{t("p5")}</p>
        </div>
        <div className="right relative h-[26.75rem] w-full overflow-hidden rounded-xl">
          <Image src="/img/services/dropdown/15.jpg" alt="Tooth Filling" layout="fill" />
        </div>
      </div>

      <div className="flex-container flex-row-reverse">
        <div className="left">
          <p className="text-[#F89B1B]">{t("p6")}</p>
          <p>{t("p7")}</p> <p className="text-[#F89B1B]">{t("p8")}</p>
          <p>{t("p9")}</p>
        </div>
        <div className="right relative h-[26.75rem] w-full overflow-hidden rounded-xl">
          <Image src="/img/services/dropdown/16.jpg" alt="Tooth Filling" layout="fill" />
        </div>
      </div>
      <div className="flex-container ">
        <div className="left">
          <h3 className="font-bold text-grey-200">{t("h3")} </h3>
          <p>{t("p14")}</p>
        </div>
        <div className="right relative h-[27.75rem] w-full overflow-hidden rounded-xl">
          <Image src="/img/services/dropdown/new1.jpeg" alt="Tooth Filling" layout="fill" />
        </div>
      </div>

      {/* <div className="important mt-8 w-full   md:mt-12">
        <h4 className="mb-4 font-bold text-[#F48211]">{t("h4")}</h4>
        <p>{t("p14")}</p>
      </div> */}
      <style jsx>
        {`
          .flex-container {
            @apply flex w-full flex-wrap  gap-3 md:gap-8;
          }
          .left,
          .right {
            @apply min-w-[15.5rem] flex-1;
          }
          p {
            @apply my-2 tracking-wide text-light md:my-4;
          }
          h3 {
            font-size: clamp(1rem, 1rem + 2vw, 1.25rem);
          }
          li {
            @apply text-xl text-light;
          }
          h4 {
            @apply text-xl font-medium;
          }
          h4 {
            @apply text-2xl font-medium;
          }
          h5 {
            @apply mb-1 text-2xl font-medium text-grey-200;
            font-size: clamp(1rem, 1rem + 3vw, 1.15rem);
          }
          li > p {
            @apply my-0 mb-5;
          }
        `}
      </style>
    </div>
  );
};

export default DropDown5;
