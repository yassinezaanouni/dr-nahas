import Image from "next/legacy/image";
import ServicesCards from "../Index/Services/ServicesCards";
import BookAppointement from "../Widgets/BookAppointement";
import ServicesDropdowns from "../Widgets/ServicesDropdown/ServicesDropdowns";
import Stats from "./Stats";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import MyVideo from "../Widgets/MyVideo";

const Services = () => {
  const { t } = useTranslation("services");

  return (
    <>
      <section className=" gap-5 text-center">
        <h1 className="relative  mx-auto mb-8   md:mb-12">
          <div className="  absolute -z-10  translate-y-1/2 translate-x-1/2 	">
            <Image src="/widgets/points.svg" alt="" width="143" height={"105"} />
          </div>
          {t("h1")}
          <div className="absolute bottom-1/2 right-1/4 -z-10 h-32 w-32 translate-y-1/2 rounded-full bg-primary blur-[150px] md:blur-[100px]"></div>
        </h1>
        <div className="relative z-20 mx-auto w-full overflow-hidden rounded-2xl">
          <MyVideo url="/treatment.mp4" poster="/thumbnail-treatment.webp" />
        </div>

        <div className="md: text-start  mt-16">
          <ServicesCards
            isServicePage={true}
            id="services"
            // setDropNumber={setDropNumber}
            // dropNumber={dropNumber}
          />
          {/* <ServicesDropdowns /> */}
        </div>
      </section>

      <section className="relative py-10 sm:py-20 lg:py-32">
        <div className="absolute  -translate-x-1/2 -translate-y-1/2">
          <Image src="/widgets/points.svg" width="162" height="119" alt="" />
        </div>
        <Stats />
        <div className="absolute  left-[50%] bottom-0 translate-y-1/2">
          <Image src="/widgets/points.svg" width="162" height="119" alt="" />
        </div>
        <div className="absolute inset-0 left-0 -z-10 w-[200vw] -translate-x-1/2 bg-grey-100"></div>
        <div className="absolute  right-0 bottom-0 aspect-square w-44 translate-x-[130%] translate-y-[20%]	 rounded-full bg-primary/20"></div>
      </section>
      <div className="z-20 mt-16">
        <BookAppointement />
      </div>
    </>
  );
};

export default Services;
