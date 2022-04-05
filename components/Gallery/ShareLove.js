import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Pagination, Autoplay } from "swiper";

import Image from "next/image";
const ShareLove = () => {
  const imgs = [
    "/img/testimonial/1.png",

    "/img/testimonial/2.png",
    "/img/testimonial/3.png",
    "/img/testimonial/2.png",
    "/img/testimonial/1.png",
    "/img/testimonial/3.png",
    "/img/testimonial/2.png",
  ];
  return (
    <section className="relative py-10 sm:py-20 lg:py-32 ">
      <div className="absolute inset-0 left-0 -z-10 w-[200vw] -translate-x-1/2 overflow-hidden bg-grey-100"></div>{" "}
      <div className="absolute right-0 top-[40%] aspect-square w-60 -translate-y-1/2  translate-x-1/2 rounded-full bg-primary/30   md:top-[50%]"></div>{" "}
      <div className=" absolute top-0 -translate-y-1/2 ">
        <Image src="/icons/quote2.svg" width={60} height={50} />
      </div>
      <figure className="">
        <figcaption>
          <blockquote>
            <h2 className="relative mx-auto mb-16 max-w-[40ch] text-center md:mb-32">
              Here <span> We Always Serve Wholeheartedly </span> So That Our
              Patients Can Enjoy Their Treatment And Be Comfortable In The
              Clinic
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
