import TreatmentCard from "./TreatmentCard";
import { useTranslation } from "next-i18next";
import MyVideo from "../../Widgets/MyVideo";

const Treatment = ({ isVideo = true }) => {
  const { t } = useTranslation("common");

  return (
    <section className="f-ai-c flex-col">
      {isVideo && <MyVideo url="/home.mp4#t=3.5" />}
      <div className={` my-12 text-center ${isVideo ? "lg:my-20" : "mt-0"}`}>
        <h2 className="mb-4">{t("t1")}</h2>
        <p className="text-light">{t("t2")}</p>
      </div>
      <div className="f-ai-c flex-wrap justify-center gap-8">
        <TreatmentCard image="/img/treatment/1.webp" icon={"/icons/treatment/treatment2.svg"} title={t("t3")} />{" "}
        <TreatmentCard image="/img/treatment/2.webp" icon={"/icons/treatment/treatment2.svg"} title={t("t4")} />{" "}
        <TreatmentCard image="/img/treatment/3.webp" icon={"/icons/treatment/treatment2.svg"} title={t("t5")} />{" "}
        <TreatmentCard image="/img/treatment/4.webp" icon={"/icons/treatment/treatment2.svg"} title={t("t6")} />{" "}
        <TreatmentCard image="/img/treatment/5.webp" icon={"/icons/treatment/treatment2.svg"} title={t("t7")} />{" "}
        <TreatmentCard image="/img/treatment/6.webp" icon={"/icons/treatment/treatment2.svg"} title={t("t8")} />{" "}
      </div>
    </section>
  );
};

export default Treatment;
