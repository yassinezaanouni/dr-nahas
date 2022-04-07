import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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

const ServicesCards = ({ isServicePage = false }) => {
  const [dropNumber, setDropNumber] = useState(1);

  const router = useRouter();
  return (
    <section className="f-ai-c  relative flex-col justify-center" id="services">
      <div className="absolute inset-0 left-0 -z-10 w-[200vw] -translate-x-1/2 bg-grey-100"></div>
      <div className="f-ai-c my-4 w-full justify-between px-6 md:my-8 md:mx-8 md:px-16  lg:mb-16 lg:px-24">
        <h2 className="text-center">
          Our Dental <span>Services</span>
        </h2>
        <Link href={"/services/#services"}>
          <div>
            <Button
              text={"Viewd All"}
              tw={`${
                isServicePage
                  ? "hidden"
                  : "mt-8  hidden md:block whitespace-nowrap"
              } `}
            />
          </div>
        </Link>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        grabCursor={true}
        className="servicesSwiper text-left "
      >
        <SwiperSlide
          onClick={() => {
            !isServicePage && router.push("/services/#services");

            setDropNumber(1);
          }}
        >
          <ServiceCard
            isSelected={dropNumber === 1 && isServicePage}
            image="/img/services/service1.webp"
            title={"Digital smile Design"}
            desc={
              "What is it? Design an approximate image of the dimensions of the teeth length, width and shape before obtaining the final prosthesis result"
            }
          />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => {
            !isServicePage && router.push("/services/#services");

            setDropNumber(2);
          }}
        >
          <ServiceCard
            isSelected={dropNumber === 2 && isServicePage}
            image="/img/services/service2.webp"
            title={"Root canal treatment"}
            desc={
              "Attention Root canal treatment is not painful, if we anesthetize the tooth correctly"
            }
          />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => {
            !isServicePage && router.push("/services/#services");

            setDropNumber(3);
          }}
        >
          <ServiceCard
            isSelected={dropNumber === 3 && isServicePage}
            image="/img/services/service3.webp"
            title={"Teeth Whitening"}
            desc={
              "Teeth Whitening is a procedure that helps in changing the teeth color from the present shade to a brighter one, for getting a nicer look and color"
            }
          />
        </SwiperSlide>{" "}
        <SwiperSlide
          onClick={() => {
            !isServicePage && router.push("/services/#services");

            setDropNumber(5);
          }}
        >
          <ServiceCard
            isSelected={dropNumber === 5 && isServicePage}
            image="/img/services/service4.webp"
            title={"Tooth Filling"}
            desc={
              "We do tooth filling when we have Broken Tooth and Dental Caries"
            }
          />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => {
            !isServicePage && router.push("/services/#services");

            setDropNumber(4);
          }}
        >
          <ServiceCard
            isSelected={dropNumber === 4 && isServicePage}
            image="/img/services/service5.webp"
            title={"Veneers "}
            desc={
              "Lets make it clear,hollywood smile, veneers, luminers, 3d smil all these names Represents the same procedure, but different commercial names"
            }
          />
        </SwiperSlide>
      </Swiper>
      {dropNumber === 1 && (
        <motion.div
          key="dropdown1"
          initial={{ translateX: "-100vw", opacity: 0 }}
          animate={{ translateX: 0, beforeChildren: true, opacity: 1 }}
          // transition={{ duration: 0.15, type: "tween" }}
          exit={{ translateX: "100vw" }}
        >
          <DropDown1 />
        </motion.div>
      )}

      {dropNumber === 2 && (
        <motion.div
          key="dropdown2"
          initial={{ translateX: "-100vw", opacity: 0 }}
          animate={{ translateX: 0, beforeChildren: true, opacity: 1 }}
          // transition={{ duration: 0.15, type: "tween" }}
          exit={{ translateX: "100vw" }}
        >
          <DropDown2 />
        </motion.div>
      )}
      {dropNumber === 3 && (
        <motion.div
          key="dropdown3"
          initial={{ translateX: "-100vw", opacity: 0 }}
          animate={{ translateX: 0, beforeChildren: true, opacity: 1 }}
          // transition={{ duration: 0.15, type: "tween" }}
          exit={{ translateX: "100vw" }}
        >
          <DropDown3 />
        </motion.div>
      )}
      {dropNumber === 4 && (
        <motion.div
          key="dropdown4"
          initial={{ translateX: "-100vw", opacity: 0 }}
          animate={{ translateX: 0, beforeChildren: true, opacity: 1 }}
          // transition={{ duration: 0.15, type: "tween" }}
          exit={{ translateX: "100vw" }}
        >
          <DropDown4 />
        </motion.div>
      )}
      {dropNumber === 5 && (
        <motion.div
          key="dropdown5"
          initial={{ translateX: "-100vw", opacity: 0 }}
          animate={{ translateX: 0, beforeChildren: true, opacity: 1 }}
          // transition={{ duration: 0.15, type: "tween" }}
          exit={{ translateX: "100vw" }}
        >
          <DropDown5 />
        </motion.div>
      )}
      <Link href="/services/#services">
        <div className={`${isServicePage ? "hidden" : ""}`}>
          <Button text={"View All"} tw={`  mt-8 md:hidden `} />
        </div>
      </Link>
    </section>
  );
};

export default ServicesCards;
