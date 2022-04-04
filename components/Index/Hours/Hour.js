import Image from "next/image";

export function Hour({ days, time }) {
  return (
    <div className="f-ai-c w-full justify-between font-bold ">
      <div className="f-ai-c gap-3 md:gap-5">
        <Image src="/icons/clock.svg" width="24" height="24" layout="fixed" />
        <h4 className="whitespace-nowrap text-light">{days}</h4>
      </div>
      <p className="text-light">{"- - - -"}</p>
      <h4 className={`${time == "Closed" ? "text-[#D84646]" : ""}`}>{time}</h4>
    </div>
  );
}
