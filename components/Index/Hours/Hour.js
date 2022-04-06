import Image from "next/image";

export function Hour({ days, time, tw, tw2 }) {
  return (
    <div
      className={`flex w-full items-center  justify-between font-bold ${tw} `}
    >
      <div className={`f-ai-c gap-3 md:gap-5`}>
        <div className={` relative h-6 w-6 ${tw2}`}>
          <Image src="/icons/clock.svg" layout="fill" />
        </div>
        <h4 className="whitespace-nowrap text-light">{days}</h4>
      </div>
      <p className={`text-light ${tw2}`}>{"- - - -"}</p>
      <div className={`f-ai-c  gap-3 md:gap-5	`}>
        <Image src="/icons/clock.svg" width="24" height="24" layout="fixed" />
        <h4 className={`${time == "Closed" ? "text-[#D84646]" : ""}`}>
          {time}
        </h4>
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
