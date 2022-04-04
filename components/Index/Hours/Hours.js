import { Button } from "../../Widgets/Button";
import WorkHours from "./WorkHours";
import Image from "next/image";

const Hours = () => {
  return (
    <section className="f-ai-c ">
      <div className="left flex basis-[60%] flex-col gap-8 ">
        <h2 className=" relative max-w-[20ch]">
          Fully Dedicated To Your<span> Dental Health</span>
          <div className="absolute bottom-1/2 right-0 -z-10 h-28 w-28 translate-y-1/2 rounded-full bg-primary blur-[150px] md:blur-[100px]"></div>
        </h2>
        <p className="max-w-[60ch] text-light">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolut labore et dolut
          labore et dol ut labore et dolut labore et dol ore magna aliquyam
          erat, sed diam voluptua. At verout labore .
        </p>
        <div className=" max-w-[33rem] rounded-xl bg-[#8993A8]/5 p-4 text-center">
          <h3>
            5 Star
            <span className="text-primary"> Rating From Our Patients</span>
          </h3>
        </div>
        <Button text="Book Appointment" tw="max-w-[16rem]" />
      </div>
      <div className="relative">
        <div className="  absolute right-0 -z-10 translate-x-1/2 -translate-y-1/2	">
          <Image src="/widgets/points.svg" alt="" width="143" height={"105"} />
        </div>
        <WorkHours tw="justify-self-center" />

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
