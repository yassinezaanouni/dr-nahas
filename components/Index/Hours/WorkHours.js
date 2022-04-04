import { Hour } from "./Hour";
import Image from "next/image";
const WorkHours = ({ tw }) => {
  return (
    <div
      className={`${tw} f-ai-c x flex-col gap-7 rounded-3xl bg-grey-100 p-12 pb-6 text-center md:p-16 md:pb-6`}
    >
      <h3 className="text-3xl font-bold	">Work Hours</h3>
      <Hour days="Mon - Wed" time="8AM-7PM" />
      <Hour days="Thu - Fri" time="8AM-6PM" />
      <Hour days="Saturday" time="9AM-5PM" />
      <Hour days="Sunday" time="Closed" />
      <div className="f-ai-c mt-6 gap-8 rounded-xl bg-primary/20 p-6 px-8 font-[500] text-primary  md:mt-12">
        <Image src="/icons/phone.svg" width="33" height="33" />
        Our Contact : +971 54 371 6446{" "}
      </div>
    </div>
  );
};

export default WorkHours;
