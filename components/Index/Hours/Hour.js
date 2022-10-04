import Image from "next/image";

export function Hour({ days, time, tw, tw2 }) {
  return (
    <div className={`flex w-full flex-wrap items-center justify-between  font-bold xxs:flex-nowrap ${tw} `}>
      <div className={`f-ai-c w-[6rem] gap-3 md:gap-5 xsm:w-[8rem]`}>
        <div className={` relative h-6 w-6 ${tw2}`}>
          <Image src="/icons/clock.svg" layout="fill" alt="clock" />
        </div>
        <h4 className="whitespace-nowrap text-light">{days}</h4>
      </div>
      <p className={`text-light ${tw2} w-[4rem]`}>{"- - - -"}</p>
      <div className={`f-ai-c w-[6rem]  gap-1 md:gap-5 xsm:w-[8rem]	`}>
        <Image src="/icons/clock.svg" width="22" height="22" layout="fixed" alt="clock" />
        <h4 className={`${time == "Closed" || time == "مغلق" ? "text-[#D84646]" : ""}`}>{time}</h4>
      </div>
      <style jsx>
        {`
          h4 {
            font-size: clamp(0.6rem, 0.5rem + 2vw, 1rem);
          }
        `}
      </style>
    </div>
  );
}
