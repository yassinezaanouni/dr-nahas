import Image from "next/image";
import { Button } from "../../Widgets/Button";
import FloatingCard from "../../Widgets/Index/FloatingCard";
const MainHero = () => {
  return (
    <div className="gap-y  mt-2 flex flex-wrap items-center justify-between gap-x-12 lg:-mt-1">
      <div className=" flex-1">
        <h1 className=" relative mt-3 max-w-[15ch] ">
          We Are Ready to Help Your Dental Problems
          <div className="absolute bottom-1/2 right-0 -z-10 h-28 w-28 translate-y-1/2 rounded-full bg-primary blur-[150px] md:blur-[110px]"></div>
        </h1>

        <Button text={"Discover"} classes={" mb-8 mt-4 lg:my-8"} />
      </div>
      <div className=" img-container">
        <div className=" relative  justify-self-end">
          <div className="only-desktop absolute bottom-0 z-10 w-80 -translate-x-1/2  -translate-y-1/2 ">
            <FloatingCard
              icon="/icons/happy-patients.svg"
              number={500}
              text="Happy Patients"
            />
          </div>
          <div className="  absolute -z-10 -translate-x-1/2 -translate-y-1/2	">
            <Image
              src="/widgets/points.svg"
              alt=""
              width="143"
              height={"105"}
            />
          </div>
          <Image
            src="/img/hero.png"
            alt="Doctor Nahas doctor near me"
            width="481"
            height={"502"}
          />
        </div>
      </div>
      <style jsx>
        {`
          h1 {
            font-size: clamp(1rem, 1rem + 3vw, 5.2rem);
          }
          .img-container {
            @apply flex justify-end md:w-[60%] lg:w-[50%];
          }
        `}
      </style>
    </div>
  );
};

export default MainHero;
