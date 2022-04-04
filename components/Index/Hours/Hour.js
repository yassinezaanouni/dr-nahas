import Image from "next/image";

export function Hour({ days, time }) {
  const rep = Math.round((1 / days.length) * 80);
  console.log("days.length", days.length ** 2);
  return (
    <div className="f-ai-c w-full justify-between font-bold ">
      <div className="f-ai-c gap-5">
        <Image src="/icons/clock.svg" width="28" height="28" />
        <h4 className="text-light">{days}</h4>
      </div>
      <p className="text-light">{"- ".repeat(rep)}</p>
      <h4 className={`${time == "Closed" ? "text-[#D84646]" : ""}`}>{time}</h4>
    </div>
  );
}
