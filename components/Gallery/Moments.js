import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";

import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
const Moments = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const imgs = [
    "/img/moments/1.webp",
    "/img/moments/2.webp",
    "/img/moments/3.webp",
    "/img/moments/4.webp",
    "/img/moments/5.webp",
    "/img/moments/6.webp",
    "/img/moments/7.webp",
  ];
  return (
    <section>
      <h2 className={` mb-6 max-w-[10ch] ${router.locale == "ar" ? " mb-14" : ""} md:mb-16 md:max-w-[30ch]`}>
        {t("g3")}
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
          return (
            <SwiperSlide key={i}>
              <div className="h-[18.75rem] w-full ">
                <Image src={img} alt="moments doctor dentist day" layout="fill" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Moments;
