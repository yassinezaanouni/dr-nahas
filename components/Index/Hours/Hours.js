import { Button } from "../../Widgets/Button";
import WorkHours from "./WorkHours";
import Image from "next/legacy/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Hours = () => {
  const { t } = useTranslation("common");
  return (
    <section className="f-ai-c w-full flex-wrap justify-center gap-6 gap-y-10 lg:justify-between ">
      <div className="left flex min-w-[13.75rem] flex-1 flex-col gap-7 sm:min-w-[25.625rem]">
        <h2 className=" relative max-w-[20ch]">
          {t("headerStar").split(" ").slice(0, -2).join(" ")}
          <span> {t("headerStar").split(" ").slice(-2).join(" ")}</span>
          <div className="absolute bottom-1/2 right-0 -z-10 h-28 w-28 translate-y-1/2 rounded-full bg-primary blur-[150px] md:blur-[100px]"></div>
        </h2>
        <p className="text-light sm:max-w-[60ch]">{t("starDesc")}</p>
        <div className=" mx-auto max-w-[33rem] rounded-xl bg-[#8993A8]/5 p-4 text-center md:px-12 lg:mx-0">
          <h3>
            5 {t("star")}
            <span className="text-primary"> {t("starRating")}</span>
          </h3>
        </div>
        <Link href={"/booking"} legacyBehavior>
          <div className="mx-auto max-w-[16rem] lg:mx-0">
            <Button text={t("bookBtn")} tw="" />
          </div>
        </Link>
      </div>
      <div className="relative max-w-[35rem] flex-1">
        <div className="  absolute right-0 -z-10 translate-x-1/2 -translate-y-1/2	">
          <Image src="/widgets/points.svg" alt="" width="143" height={"105"} />
        </div>
        <WorkHours tw="" />

        <div className="  absolute -z-10 -translate-x-1/2 -translate-y-1/2	">
          <Image src="/widgets/points.svg" alt="" width="143" height={"105"} />
        </div>
      </div>
      <style jsx>
        {`
          h3 {
            @apply font-black;
            font-size: clamp(1rem, 1rem + 2vw, 1.6rem);
          }
        `}
      </style>
    </section>
  );
};

export default Hours;
