import { Button } from "../../Widgets/Button";
import WorkHours from "./WorkHours";
import Image from "next/image";
import Link from "next/link";

const Hours = () => {
  return (
    <section className="f-ai-c w-full flex-wrap justify-center gap-4 gap-y-10 lg:justify-between  macbook:justify-start ">
      <div className="left flex flex-col gap-7 lg:basis-[45%] macbook:basis-[60%] ">
        <h2 className=" relative max-w-[20ch]">
          Fully Dedicated To Your<span> Dental Health</span>
          <div className="absolute bottom-1/2 right-0 -z-10 h-28 w-28 translate-y-1/2 rounded-full bg-primary blur-[150px] md:blur-[100px]"></div>
        </h2>
        <p className="text-light sm:max-w-[60ch]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolut labore et dolut
          labore et dol ut labore et dolut labore et dol ore magna aliquyam
          erat, sed diam voluptua. At verout labore .
        </p>
        <div className=" mx-auto max-w-[33rem] rounded-xl bg-[#8993A8]/5 p-4 text-center md:px-12 lg:mx-0">
          <h3>
            5 Star
            <span className="text-primary"> Rating From Our Patients</span>
          </h3>
        </div>
        <Link href={"/book"}>
          <div className="mx-auto max-w-[16rem] lg:mx-0">
            <Button text="Book Appointment" tw="" />
          </div>
        </Link>
      </div>
      <div className="relative">
        <div className="  absolute right-0 -z-10 translate-x-1/2 -translate-y-1/2	">
          <Image src="/widgets/points.svg" alt="" width="143" height={"105"} />
        </div>
        <WorkHours tw="" />

        <div className="  absolute -z-10 -translate-x-1/2 -translate-y-1/2	">
          <Image src="/widgets/points.svg" alt="" width="143" height={"105"} />
        </div>
      </div>
      <style jsx>
        {`
          h3 {
            @apply font-black;
            font-size: clamp(1rem, 1rem + 2vw, 1.6rem);
          }
        `}
      </style>
    </section>
  );
};

export default Hours;
