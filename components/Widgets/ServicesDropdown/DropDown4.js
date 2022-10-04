import Image from "next/image";
import { useTranslation } from "next-i18next";

const DropDown4 = () => {
  const { t } = useTranslation("dropDown4");

  return (
    <div className="f-ai-c  text-start  mt-12 flex-col gap-12 md:gap-16 lg:mt-20 lg:gap-16">
      <div className="flex-container">
        <div className="left">
          <h2 className="text-primary">{t("h1")} </h2>
          <h3 className="font-bold text-grey-200">{t("h2")}</h3>
          <p>{t("p1")} </p>
        </div>
        <div className="right relative h-[26.75rem] w-full overflow-hidden rounded-xl">
          <Image src="/img/services/dropdown/11.webp" alt="Digital smile Design" layout="fill" />
        </div>
      </div>

      <div className="flex-container flex-row-reverse">
        <div className="left">
          <h3 className="font-bold text-grey-200">{t("h3")}</h3>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
          <p>{t("p4")}</p>
          <p>{t("p5")}</p>
        </div>
        <div className="right relative h-[21.75rem] w-full overflow-hidden rounded-xl">
          <Image src="/img/services/dropdown/12.jpg" alt="Digital smile Design" layout="fill" />
        </div>
      </div>

      <div className="flex-container ">
        <div className="left">
          <h3 className="font-bold text-grey-200">{t("h4")}</h3>

          <ol>
            <li>
              <h5>{t("p6")}</h5>
              <p>{t("p7")}</p>
            </li>{" "}
            <li>
              <h5>{t("p8")}</h5>
              <p>{t("p9")}</p>
            </li>{" "}
            <li>
              <h5>{t("p10")}</h5>
              <p>{t("p11")}</p>
            </li>{" "}
            <li>
              <h5>{t("p12")}</h5>
              <p>{t("p13")}</p>
            </li>{" "}
          </ol>
        </div>
        <div className="right relative h-[26.75rem] w-full overflow-hidden rounded-xl lg:h-[30.75rem]">
          <Image src="/img/services/dropdown/13.webp" alt="Digital smile Design" layout="fill" />
        </div>
      </div>
      <div className="flex-container flex-row-reverse">
        <div className="left">
          <h4 className="mb-4 font-bold text-[#F48211]">{t("h5")}</h4>
          <p>{t("p15")}</p>
        </div>
        <div className="right relative h-[21.75rem] w-full overflow-hidden rounded-xl">
          <Image src="/img/services/dropdown/14.jpg" alt="Digital smile Design" layout="fill" />
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

export default DropDown4;
