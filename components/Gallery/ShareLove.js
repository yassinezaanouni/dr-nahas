import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Pagination, Autoplay } from "swiper";

import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
const ShareLove = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const imgs = [
    "/img/testimonial/1.webp",

    "/img/testimonial/2.webp",
    "/img/testimonial/3.webp",
    "/img/testimonial/2.webp",
    "/img/testimonial/1.webp",
    "/img/testimonial/3.webp",
    "/img/testimonial/2.webp",
  ];
  return (
    <section className="relative py-10 sm:py-20 lg:py-32 ">
      <div
        className={`absolute inset-0 left-0 -z-10 w-[200vw] ${
          router.locale == "ar" ? "translate-x-1/2" : "-translate-x-1/2 "
        } overflow-hidden bg-grey-100`}
      ></div>{" "}
      <div
        className={`md:top-[50%]" absolute right-0 top-[40%] aspect-square w-60  -translate-y-1/2 translate-x-1/2 rounded-full   bg-primary/30`}
      ></div>
      <div className=" absolute top-0 -translate-y-1/2 ">
        <Image src="/icons/quote2.svg" width={60} height={50} alt="" />
      </div>
      <figure className="">
        <figcaption>
          <blockquote>
            <h2 className="relative mx-auto mb-16 max-w-[40ch] text-center md:mb-32">
              {t("g4").split(" ").slice(0, 1).join(" ")}
              <span> {t("g4").split(" ").slice(1, 5).join(" ")} </span>{" "}
              {t("g4").split(" ").slice(5, t("g4").length).join(" ")}
              <div className="absolute bottom-1/2 left-0 z-20 h-28 w-28 translate-y-1/2 rounded-full bg-primary blur-[150px] md:blur-[100px]"></div>
            </h2>
          </blockquote>
        </figcaption>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          grabCursor={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="shareSwiper"
        >
          {imgs &&
            imgs.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={img}
                    width="340"
                    height="285"
                    alt="love clients moments"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </figure>
    </section>
  );
};

export default ShareLove;
