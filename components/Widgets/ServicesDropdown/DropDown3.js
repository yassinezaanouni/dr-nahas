import Image from "next/image";

import { useTranslation } from "next-i18next";
const DropDown3 = () => {
  const { t } = useTranslation("dropDown3");

  return (
    <div className="f-ai-c  text-start  mt-12 flex-col gap-12 md:gap-16 lg:mt-20 lg:gap-16">
      <div className="flex-container">
        <div className="left">
          <h2 className="text-primary">{t("h1")} </h2>
          <h3 className="font-bold text-grey-200">{t("h2")}</h3>
          <p>{t("p1")} </p>
          <p>{t("p2")}</p>
        </div>
        <div className="right relative h-[26.75rem] w-full overflow-hidden rounded-xl">
          <Image src="/img/services/dropdown/8.jpg" alt="Digital smile Design" layout="fill" />
        </div>
      </div>

      <div className="flex-container flex-row-reverse">
        <div className="left">
          <h3 className="font-bold text-grey-200">{t("h3")}</h3>
          <p className="whitespace-pre-line">{t("p3")}</p>
        </div>
        <div className="right relative h-[21.75rem] w-full overflow-hidden rounded-xl">
          <Image src="/img/services/dropdown/9.webp" alt="Digital smile Design" layout="fill" />
        </div>
      </div>
      <div className="flex-container ">
        <div className="left">
          <h3 className="font-bold text-grey-200">{t("h4")}</h3>

          <p>{t("p4")}</p>
          <h5>{t("h5")}</h5>
          <p className="whitespace-pre-line">{t("p5")}</p>
          <h5>{t("h6")}</h5>
          <p className="whitespace-pre-line">{t("p6")}</p>
        </div>
        <div className="right relative h-[21.75rem] w-full overflow-hidden rounded-xl">
          <Image src="/img/services/dropdown/10.jpg" alt="Digital smile Design" layout="fill" />
        </div>
      </div>
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
            font-size: clamp(1rem, 1rem + 2vw, 1.7rem);
          }
          li {
            @apply text-xl text-light;
          }
          h4 {
            @apply text-xl font-medium text-grey-200;
          }
          h4 {
            @apply text-2xl font-medium  text-primary;
          }
          h5 {
            @apply mb-1 text-2xl font-medium text-grey-200;
            font-size: clamp(1rem, 1rem + 3vw, 1.3rem);
          }
          li > p {
            @apply my-0 mb-5;
          }
        `}
      </style>
    </div>
  );
};

export default DropDown3;
