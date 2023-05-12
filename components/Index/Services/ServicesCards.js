import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import ServiceCard from "./ServiceCard";
import { Button } from "../../Widgets/Button";
import Link from "next/link";
import { Pagination, Navigation } from "swiper";
import DropDown1 from "../../Widgets/ServicesDropdown/DropDown1";
import DropDown2 from "../../Widgets/ServicesDropdown/DropDown2";
import DropDown3 from "../../Widgets/ServicesDropdown/DropDown3";
import DropDown4 from "../../Widgets/ServicesDropdown/DropDown4";
import DropDown5 from "../../Widgets/ServicesDropdown/DropDown5";
import { useRouter } from "next/router";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "next-i18next";

const ServicesCards = ({ isServicePage = false, id = "" }) => {
  const { t } = useTranslation("index");

  const router = useRouter();
  const [dropNumber, setDropNumber] = useState(Number(router?.query?.service) || 1);
  return (
    <section className="f-ai-c  relative flex-col justify-center" id={id}>
      <div
        className={`absolute inset-0 left-0 -z-10 w-[200vw] ${
          router.locale == "ar" ? "translate-x-1/2" : "-translate-x-1/2"
        } bg-grey-100`}
      ></div>
      <div
        className={`f-ai-c my-4 w-full justify-between px-6 md:my-8 md:mx-8 ${
          isServicePage ? "md:justify-center" : ""
        } md:px-16  lg:mb-16 lg:px-24`}
      >
        <h2 className="text-center">
          {t("servicesHeader").split(" ").slice(0, -1).join(" ")}
          <span> {t("servicesHeader").split(" ").slice(-1).join(" ")} </span>
        </h2>
        <Link href={"/services/#services"}>
          <div>
            <Button
              text={t("servicesBtn")}
              tw={`${isServicePage ? "hidden" : " hidden md:block whitespace-nowrap"} `}
            />
          </div>
        </Link>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        grabCursor={true}
        navigation={true}
        modules={[Navigation]}
        className="servicesSwiper text-start  "
      >
        <SwiperSlide
          onClick={() => {
            !isServicePage && router.push("/services?service=1#services");
            isServicePage && document.getElementById("services-dropdown").scrollIntoView();

            setDropNumber(1);
          }}
        >
          <ServiceCard
            isSelected={dropNumber === 1 && isServicePage}
            image="/img/services/service1.webp"
            title={t("service1")}
            desc={t("service1Desc")}
          />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => {
            !isServicePage && router.push("/services?service=2#services");

            isServicePage && document.getElementById("services-dropdown").scrollIntoView();

            setDropNumber(2);
          }}
        >
          <ServiceCard
            isSelected={dropNumber === 2 && isServicePage}
            image="/img/services/service2.webp"
            title={t("service2")}
            desc={t("service2Desc")}
          />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => {
            !isServicePage && router.push("/services?service=3#services");

            isServicePage && document.getElementById("services-dropdown").scrollIntoView();

            setDropNumber(3);
          }}
        >
          <ServiceCard
            isSelected={dropNumber === 3 && isServicePage}
            image="/img/services/service3.webp"
            title={t("service3")}
            desc={t("service3Desc")}
          />
        </SwiperSlide>{" "}
        <SwiperSlide
          onClick={() => {
            !isServicePage && router.push("/services?service=5#services");

            isServicePage && document.getElementById("services-dropdown").scrollIntoView();

            setDropNumber(5);
          }}
        >
          <ServiceCard
            isSelected={dropNumber === 5 && isServicePage}
            image="/img/services/service4.webp"
            title={t("service4")}
            desc={t("service4Desc")}
          />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => {
            !isServicePage && router.push("/services?service=4#services");

            isServicePage && document.getElementById("services-dropdown").scrollIntoView();

            setDropNumber(4);
          }}
        >
          <ServiceCard
            isSelected={dropNumber === 4 && isServicePage}
            image="/img/services/service5.webp"
            title={t("service5")}
            desc={t("service5Desc")}
          />
        </SwiperSlide>
      </Swiper>

      <div id="services-dropdown">
        {isServicePage && dropNumber === 1 && (
          <motion.div
            key="dropdown1"
            initial={{ translateX: "-25px", opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            exit={{ translateX: "100vw" }}
          >
            <DropDown1 />
          </motion.div>
        )}

        {isServicePage && dropNumber === 2 && (
          <motion.div
            key="dropdown2"
            initial={{ translateX: "-25px", opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            exit={{ translateX: "100vw" }}
          >
            <DropDown2 />
          </motion.div>
        )}
        {isServicePage && dropNumber === 3 && (
          <motion.div
            key="dropdown3"
            initial={{ translateX: "-25px", opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            exit={{ translateX: "100vw" }}
          >
            <DropDown3 />
          </motion.div>
        )}
        {isServicePage && dropNumber === 4 && (
          <motion.div
            key="dropdown4"
            initial={{ translateX: "-25px", opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            exit={{ translateX: "100vw" }}
          >
            <DropDown4 />
          </motion.div>
        )}
        {isServicePage && dropNumber === 5 && (
          <motion.div
            key="dropdown5"
            initial={{ translateX: "-25px", opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            exit={{ translateX: "100vw" }}
          >
            <DropDown5 />
          </motion.div>
        )}
        <Link href="/services/#services">
          <div className={`${isServicePage ? "hidden" : ""}`}>
            <Button text={t("servicesBtn")} tw={`  mt-8 md:hidden `} />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ServicesCards;
