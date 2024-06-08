import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

import Figure from "./Figure";

const Testimonial = () => {
  const figures = [
    {
      author: "Alena Pale.",
      text: "I Am Very Happy To Come, I Get Very Good Service With Very Friendly Doctor.",
      rating: 5,
      image: "/img/testimonial/1.webp",
    },
    {
      author: "Henrieta U.",
      text: "Just what I was looking for. I am really satisfied with my Doctor.",
      rating: 4,
      image: "/img/testimonial/2.webp",
    },
    {
      author: "Abraham M.",
      text: "Doctor is the most valuable business resource we have EVER purchased.",
      rating: 5,
      image: "/img/testimonial/3.webp",
    },
  ];
  return (
    <section className="relative py-10 sm:py-20 lg:py-32 ">
      <div className="absolute inset-0 left-0 -z-10 w-[200vw] -translate-x-1/2 overflow-hidden bg-grey-100"></div>
      <Swiper
        spaceBetween={4000}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="figuresSwiper"
      >
        {figures &&
          figures.map((figure, i) => (
            <SwiperSlide key={i}>
              <Figure
                author={figure.author}
                text={figure.text}
                rating={figure.rating}
                image={figure.image}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
