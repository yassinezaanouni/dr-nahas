import Image from "next/legacy/image";

const Connection = ({ tw }) => {
  return (
    <div className="absolute">
      <div className={` relative right-0  left-6  z-20	${tw}`}>
        <Image src="/img/testimonial/line.svg" alt="tesetimonial" width="243.58" height="467.14" priority={true} />
        <div className="absolute top-0 right-0 aspect-square w-20 -translate-y-1/3 translate-x-1/2 overflow-hidden rounded-full border-[5px] border-white">
          <Image src="/img/testimonial/p1.webp" alt="tesetimonial" layout="fill" priority={true} />
        </div>{" "}
        <div className="absolute right-0 hidden aspect-square w-20 -translate-y-1/2 translate-x-1/2 overflow-hidden rounded-full border-[5px] border-white md:block">
          <Image src="/img/testimonial/p2.webp" alt="tesetimonial" layout="fill" priority={true} />
        </div>{" "}
        <div className="absolute top-[60%]  aspect-square   w-20  -translate-x-1/2 overflow-hidden rounded-full border-[5px] border-white">
          <Image src="/img/testimonial/p3.webp" alt="tesetimonial" layout="fill" priority={true} />
        </div>
      </div>
    </div>
  );
};

export default Connection;
