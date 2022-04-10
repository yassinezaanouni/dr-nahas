import Image from "next/image";
import { useTranslation } from "next-i18next";

const DropDown2 = () => {
  const { t } = useTranslation("dropDown2");

  return (
    <div className="f-ai-c  text-start  mt-12 flex-col gap-12 md:gap-16 lg:mt-20 lg:gap-16">
      <div className="flex-container">
        <div className="left">
          <h2 className="text-primary">{t("h1")} </h2>
          <h3 className="font-bold text-[#F89B1B]">{t("h2")}</h3>
          <p>{t("p1")} </p>
        </div>
        <div className="right relative h-[21.75rem] w-full overflow-hidden rounded-xl">
          <Image
            src="/img/services/dropdown/4.jpg"
            alt="Digital smile Design"
            layout="fill"
          />
        </div>
      </div>

      <div className="flex-container flex-row-reverse">
        <div className="left">
          <h3 className="font-bold text-grey-200">{t("h3")}</h3>
          <p>{t("p2")}</p>
          <h4>{t("h4")} </h4>
          <ul>
            <li>
              <p className="">{t("p3")}</p>
            </li>
            <li>
              <p className="">{t("p4")}</p>
            </li>
          </ul>
        </div>
        <div className="right relative h-[21.75rem] w-full overflow-hidden rounded-xl">
          <Image
            src="/img/services/dropdown/5.jpg"
            alt="Digital smile Design"
            layout="fill"
          />
        </div>
      </div>
      <div className="flex-container">
        <div className="left">
          <h3 className="font-bold text-grey-200">{t("h5")}</h3>
          <h4 className="font-bold">{t("h6")}</h4>
          <ol>
            <li>
              <p>{t("p5")}</p>
            </li>

            <li>
              <p>{t("p6")}</p>
            </li>
            <li>
              <p>
                {t("p7")}
                root
              </p>
            </li>
            <li>
              <p>{t("p8")}</p>
            </li>
          </ol>
          <h4>{t("h7")}</h4>
          <p className="treatment-methods ">{t("p9")}</p>
          <p>{t("p10")}</p>
          <p className="treatment-methods ">{t("p11")}</p>
          <p>{t("p12")}</p> <p className="treatment-methods ">{t("p13")}</p>
          <p>{t("p14")}</p>
        </div>
        <div className="right relative h-[28.75rem] w-full overflow-hidden rounded-xl">
          <Image
            src="/img/services/dropdown/6.jpg"
            alt="Digital smile Design"
            layout="fill"
          />
        </div>
      </div>
      <div className="flex-container flex-row-reverse">
        <div className="left">
          <h3 className="font-bold text-grey-200">{t("h8")}</h3>
          <p>{t("p15")}</p> <p>{t("p16")}</p>
        </div>
        <div className="right relative h-[28.75rem] w-full overflow-hidden rounded-xl">
          <Image
            src="/img/services/dropdown/7.jpg"
            alt="Digital smile Design"
            layout="fill"
          />
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
          h4 {
            @apply text-xl font-medium text-grey-200;
          }

          h4 {
            @apply text-2xl font-medium  text-[#F89B1B];
          }
          h5 {
            @apply mb-1 text-2xl font-medium text-grey-200;
            font-size: clamp(1rem, 1rem + 3vw, 1.3rem);
          }
          li > p {
            @apply my-0 mb-5;
          }
          .treatment-methods {
            @apply text-[#F89B1B];
          }
        `}
      </style>
    </div>
  );
};

export default DropDown2;
