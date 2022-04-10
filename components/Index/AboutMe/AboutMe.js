import Image from "next/image";
import BluredDiv from "../../Widgets/BluredDiv";
import FloatingCard from "../../Widgets/Index/FloatingCard";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const AboutMe = () => {
  const router = useRouter();
  const { t } = useTranslation("index");
  return (
    <section className="f-ai-c flex-wrap gap-4 2xl:items-start 2xl:gap-x-20">
      <div className="relative aspect-square w-[37rem]">
        <div className="absolute left-4 bottom-11  z-10  md:bottom-24">
          <Image src="/img/doctor.png" width="586" height="585" alt="doctor" />
        </div>
        <div className="absolute bottom-[30%] -left-[3%]">
          <Image src="/widgets/points.svg" width="162" height="119" alt="" />
        </div>
        <BluredDiv
          icon="/icons/about-me.svg"
          tw=" absolute right-0 translate-y-1/2 -translate-x-1/3"
        />
        <FloatingCard
          icon="/icons/heart.svg"
          number={7}
          text={t("expCard")}
          isInverted={true}
          tw={`absolute text-light left-0   ${
            router.locale == "ar" ? "md:translate-x-1/5" : "-translate-x-1/4"
          }`}
          tw2={
            "absolute top-0 right-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full w-[36px] aspect-square md:w-[51px] "
          }
        />
        <FloatingCard
          icon="/icons/happy-patients.svg"
          number={500}
          text={t("heroCard")}
          tw={`absolute bottom-0 z-10  translate-x-1/4 ${
            router.locale === "ar"
              ? "md:-translate-x-1/2"
              : "md:translate-x-1/2"
          } -translate-y-1/2 `}
          tw2={" h-[17.24px] w-[24.62px] md:h-[29px] md:w-[41.5px]"}
        />
        <div className="mx-auto h-[87%] w-[87%] rounded-full bg-primary/20"></div>
      </div>
      <div className="right flex-1 md:min-w-[18rem]">
        <div className="only-desktop absolute -z-10 translate-y-1/4 -translate-x-1/2	">
          <Image src="/widgets/points.svg" alt="" width="143" height={"105"} />
        </div>
        <h2 className="mb-6">
          <span>{t("aboutHeader").split(" ").slice(0, 2).join(" ")} </span>

          {t("aboutHeader")
            .split(" ")
            .slice(2, t("aboutHeader").length)
            .join(" ")}
        </h2>
        <p className="whitespace-pre-line leading-relaxed text-light	">
          {t("aboutP")}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
