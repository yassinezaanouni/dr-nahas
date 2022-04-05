import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";

import Image from "next/image";
const Moments = () => {
  const imgs = [
    "/img/moments/1.png",
    "/img/moments/2.png",
    "/img/moments/3.png",
    "/img/moments/1.png",
    "/img/moments/2.png",
    "/img/moments/3.png",
    "/img/moments/1.png",
  ];
  return (
    <section>
      <h2 className=" mb-6 max-w-[10ch] md:mb-16 md:max-w-[30ch]">
        Dr.Nahas Moment
      </h2>
      <Swiper
        grabCursor={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="momentsSwiper"
      >
        {imgs.map((img, i) => {
          console.log("img", img);
          return (
            <SwiperSlide key={i}>
              <div className="h-[18.75rem] w-full ">
                <Image
                  src={img}
                  alt="moments doctor dentist day"
                  layout="fill"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Moments;
