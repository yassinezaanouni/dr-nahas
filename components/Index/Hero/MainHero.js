import Image from "next/legacy/image";
import { Button } from "../../Widgets/Button";
import FloatingCard from "../../Widgets/Index/FloatingCard";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Parallax } from "react-scroll-parallax";

const MainHero = () => {
  const { t } = useTranslation("index");
  const router = useRouter();
  return (
    <div className="gap-y gap-x-12 lg:-mt-1 flex flex-wrap items-center justify-between mt-2">
      <div className=" flex-1">
        <h1 className=" relative mt-3 max-w-[15ch] ">
          {t("hero")}
          <div className="absolute bottom-1/2 right-0 -z-10 h-28 w-28 translate-y-1/2 rounded-full bg-primary blur-[150px] md:blur-[110px]"></div>
        </h1>

        <Button text={t("heroBtn")} tw={" mb-8 mt-4 lg:my-8"} />
      </div>
      <div className=" img-container">
        <div className=" justify-self-end relative">
          <div
            className={`only-desktop absolute bottom-0 z-10  ${
              router.locale == "ar" ? "translate-x-1/2" : "-translate-x-1/2"
            }  -translate-y-1/2 `}
          >
            {" "}
            <Parallax translateX={["0px", "-80px"]} speed={-6}>
              <FloatingCard
                icon="/icons/happy-patients.svg"
                number={500}
                text={t("heroCard")}
              />
            </Parallax>
          </div>
          <div className=" -z-10 absolute -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/widgets/points.svg"
              alt=""
              width="143"
              height={"105"}
            />
          </div>
          <Image
            src="/img/hero.webp"
            alt="Doctor Nahas doctor near me"
            width="481"
            height={"502"}
            priority
          />
          <div className=" -z-10 absolute right-0 translate-x-1/2 -translate-y-1/2">
            <Image
              src="/widgets/points.svg"
              alt=""
              width="143"
              height={"105"}
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .img-container {
            @apply flex justify-end md:w-[60%] lg:w-[50%];
          }
        `}
      </style>
    </div>
  );
};

export default MainHero;
