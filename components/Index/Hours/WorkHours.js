import { Hour } from "./Hour";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const WorkHours = ({ tw }) => {
  const { t } = useTranslation("common");
  return (
    <div
      className={`${tw} f-ai-c  flex-col gap-7  rounded-3xl bg-grey-100 px-6 py-8 text-center md:p-12  md:pb-6 macbook:p-16  `}
    >
      <h3 className="text-3xl font-bold	">{t("workHours")}</h3>
      <Hour days={t("hour1")} time="8AM-7PM" tw="" />
      <Hour days={t("hour2")} time="8AM-6PM" tw="" />
      <Hour days={t("hour3")} time="9AM-5PM" tw="" />
      <Hour days={t("hour4")} time={t("closed")} tw="" />
      <div className="f-ai-c mt-6 justify-center gap-1 rounded-xl bg-primary/20 p-4 font-[500] text-primary md:mt-12 md:p-6 md:px-8 xl:gap-8">
        <Image src="/icons/phone.svg" width="33" height="33" alt="" />
        {t("contactInfo")}
      </div>
    </div>
  );
};

export default WorkHours;
