import { Button } from "../../Widgets/Button";
import Image from "next/image";
const BookAppointment = () => {
  return (
    <div className="f-ai-c mt-12  flex-wrap justify-between gap-8 rounded-2xl bg-grey-100 py-12 px-6 md:mx-8 md:px-16 lg:mt-20 lg:flex-nowrap lg:px-24">
      <div className="flex-1">
        <div className="absolute  -translate-y-1/4	">
          <Image src="/widgets/points.svg" alt="" width="143" height={"105"} />
        </div>{" "}
        <h2 className="relative ml-8 ">Book an Appointment</h2>
      </div>

      <form className="z-10 flex  flex-1  flex-wrap gap-7">
        <div className="flex flex-1 flex-col gap-7">
          <input type="text" placeholder="Your Name..." />
          <input type="date" />
        </div>
        <div className="flex flex-1 flex-col gap-7">
          <input type="text" placeholder="Your Email..." />
          <Button text="Book Now" classes={"flex-1"} />
        </div>
      </form>
      <style jsx>
        {`
          h2 {
            font-weight: 600;
            font-size: clamp(0.8rem, 0.8rem + 3vw, 2.2rem);
          }
          input {
            padding: 0.5rem 1.5rem;
            border-radius: 0.4rem;
          }
        `}
      </style>
    </div>
  );
};

export default BookAppointment;
