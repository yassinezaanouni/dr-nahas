import { Hour } from "./Hour";
import Image from "next/image";
const WorkHours = ({ tw }) => {
  return (
    <div
      className={`${tw} f-ai-c x flex-col gap-7  rounded-3xl bg-grey-100 px-6 py-8 text-center md:p-12  md:pb-6 macbook:p-16  `}
    >
      <h3 className="text-3xl font-bold	">Work Hours</h3>
      <Hour days="Mon - Wed" time="8AM-7PM" />
      <Hour days="Thu - Fri" time="8AM-6PM" />
      <Hour days="Saturday" time="9AM-5PM" />
      <Hour days="Sunday" time="Closed" />
      <div className="f-ai-c mt-6 flex-wrap  justify-center gap-1 rounded-xl bg-primary/20 p-4 font-[500] text-primary md:mt-12 md:gap-8 md:p-6  md:px-8">
        <Image src="/icons/phone.svg" width="33" height="33" />
        Our Contact : +971 54 371 6446{" "}
      </div>
    </div>
  );
};

export default WorkHours;
