import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import ServiceCard from "./ServiceCard";
import { Button } from "../../Widgets/Button";

const Services = () => {
  return (
    <section className="f-ai-c  relative flex-col justify-center  ">
      <div className="absolute inset-0 left-0 -z-10 w-[200vw] -translate-x-1/2 bg-grey-100"></div>
      <div className="f-ai-c my-4 w-full justify-between px-6 md:my-8 md:mx-8 md:px-16  lg:mb-16 lg:px-24">
        <h2 className="">
          Our Dental <span>Services</span>
        </h2>
        <Button text={"View All"} tw="hidden md:block whitespace-nowrap" />
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        className="servicesSwiper"
      >
        <SwiperSlide>
          <ServiceCard
            image="/img/services/service1.png"
            title={"Digital smile Design"}
            desc={
              "Attention Root canal treatment is not painful, if we anesthetize the tooth correctly"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            image="/img/services/service2.png"
            title={"Teeth Whitening"}
            desc={
              "Teeth Whitening is a procedure that helps in changing the teeth color from the present shade to a brighter one, for getting a nicer look and color"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            image="/img/services/service3.png"
            title={"Tooth Filling"}
            desc={
              "We do tooth filling when we have Broken Tooth and Dental Caries"
            }
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <ServiceCard
            image="/img/services/service4.png"
            title={"Veneers"}
            desc={
              "Lets make it clear,hollywood smile, veneers, luminers, 3d smil all these names Represents the same procedure, but different commercial names"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            image="/img/services/service5.png"
            title={"Digital smile Design "}
            desc={
              "What is it? Design an approximate image of the dimensions of the teeth length, width and shape before obtaining the final prosthesis result"
            }
          />
        </SwiperSlide>
      </Swiper>
      <Button text={"View All"} tw="mt-8 md:hidden" />
    </section>
  );
};

export default Services;
