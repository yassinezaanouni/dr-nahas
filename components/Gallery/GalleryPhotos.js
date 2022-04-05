import Image from "next/image";

export const GalleryPhotos = () => {
  return (
    <section className=" gap-5 text-center">
      <h1 className="relative  mx-auto mb-8 max-w-[25ch]  md:mb-12">
        <div className="  absolute -z-10  translate-y-1/2 translate-x-1/2 	">
          <Image src="/widgets/points.svg" alt="" width="143" height={"105"} />
        </div>
        Many Moments That we Capture in Dr.Nahas Clinic
        <div className="absolute bottom-1/2 right-1/4 -z-10 h-32 w-32 translate-y-1/2 rounded-full bg-primary blur-[150px] md:blur-[100px]"></div>
      </h1>
      <div className="relative mx-auto h-[14.75rem] w-full overflow-hidden rounded-2xl md:h-[25.75rem] macbook:h-[37.75rem]">
        <Image
          src="/img/gallery/gallery1.png"
          alt="clinic dentist"
          layout="fill"
        />
      </div>
      <h2 className="mb-6 mt-8 md:mb-16 md:mt-24">
        Dental<span> Gallery</span>
      </h2>
      <div className="imgs-container  ">
        <div className="relative mx-auto h-[8.125rem] w-full justify-center overflow-hidden rounded-xl sm:h-[14.125rem] lg:col-span-2 xl:h-[20.5625rem] macbook:h-[22.5625rem]">
          <Image src="/img/gallery/1.png" alt="clinic dentist" layout="fill" />
        </div>
        <div className="relative mx-auto h-[8.125rem] w-full justify-center overflow-hidden rounded-xl sm:h-[14.125rem] lg:col-span-5 xl:h-[20.5625rem] macbook:h-[22.5625rem]">
          <Image src="/img/gallery/2.png" alt="clinic dentist" layout="fill" />
        </div>
        <div className="relative mx-auto h-[8.125rem] w-full justify-center overflow-hidden rounded-xl sm:h-[14.125rem] lg:col-span-3 xl:h-[20.5625rem] macbook:h-[22.5625rem]">
          <Image src="/img/gallery/5.png" alt="clinic dentist" layout="fill" />
        </div>{" "}
        <div className="lg:col-span-[1.5] relative mx-auto h-[8.125rem] w-full justify-center overflow-hidden rounded-xl sm:h-[14.125rem] lg:col-span-2 xl:h-[20.5625rem] macbook:h-[22.5625rem]">
          <Image src="/img/gallery/3.png" alt="clinic dentist" layout="fill" />
        </div>
        <div className="relative mx-auto h-[8.125rem] w-full  justify-center overflow-hidden rounded-xl sm:h-[14.125rem] lg:col-span-2 xl:h-[20.5625rem] macbook:h-[22.5625rem]">
          <Image src="/img/gallery/4.png" alt="clinic dentist" layout="fill" />
        </div>
      </div>
      <style jsx>
        {`
          .imgs-container {
            @apply grid gap-3 sm:gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-7;
          }
        `}
      </style>
    </section>
  );
};
