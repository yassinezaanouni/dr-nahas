import Image from "next/legacy/image";
import { Hour } from "../Index/Hours/Hour";
import { Button } from "./Button";
import { useTranslation } from "next-i18next";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import SubmitionStateAlert from "./SubmitionStateAlert";
import Spinner from "./Spinner";

const BookAppointement = () => {
  const { t } = useTranslation("common");
  const [values, setValues] = useState({
    name: "",
    email: "",
    date: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .send("service_cf25axc", "template_w4hqdka", values, "Pi2u0fzb8a1Qr03YS")
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setIsSuccess(false);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleAlertClose = () => {
    setValues({
      name: "",
      email: "",
      date: "",
    });
    setIsSuccess(null);
  };
  return (
    <section className=" ">
      <div className="f-ai-c md:text-start  mb-8 flex-wrap justify-center gap-4 text-center md:mb-16 ">
        <h2 className="max-w[12] relative lg:basis-[30%]">
          {t("book").split(" ").slice(0, -1).join(" ")}
          <span> {t("book").split(" ").slice(-1).join(" ")}</span>
          <div className="absolute bottom-1/2 left-0 z-20 h-28 w-28 translate-y-1/2 rounded-full bg-primary blur-[150px] md:blur-[100px]"></div>
        </h2>
        <div className="flex w-full flex-1 gap-1 md:gap-8 xsm:flex-nowrap">
          <Hour days={t("hour1")} time="8AM-7PM" tw="flex-col xsm:items-start " tw2="hidden" />
          <Hour days={t("hour2")} time="8AM-6PM" tw="flex-col xsm:items-start " tw2="hidden" />
          <Hour days={t("hour3")} time="9AM-5PM" tw="flex-col xsm:items-start " tw2="hidden" />
        </div>
      </div>
      <div className=" relative">
        <div className="  absolute  -z-[10] -translate-y-1/2 -translate-x-1/2 	">
          <Image src="/widgets/points.svg" alt="" width="143" height={"105"} />
        </div>
        <div className="absolute bottom-0 right-0 -z-10 h-28 w-28 translate-y-1/2 translate-x-1/2 rounded-2xl bg-primary/40  "></div>

        <div className=" relative h-[25.9375rem] w-full overflow-hidden rounded-3xl lg:h-[45.9375rem] ">
          <Image src="/img/booking.webp" alt="booking dentesit" layout="fill" />

          <div className="absolute inset-x-8 bottom-8 z-10 rounded-3xl bg-white p-6 md:p-12">
            {isSuccess === null && !isSending && (
              <form onSubmit={sendEmail} className="f-ai-c w-full flex-wrap justify-between gap-4  bg-white ">
                <input
                  aria-labelledby="name"
                  type="text"
                  name="name"
                  placeholder={t("name")}
                  required
                  onChange={handleChange}
                />
                <input
                  aria-labelledby="email"
                  type="email"
                  name="email"
                  placeholder={t("email")}
                  required
                  onChange={handleChange}
                />
                <input aria-labelledby="date" type="date" name="date" required onChange={handleChange} />
                <Button text={t("bookBtn")} tw="flex-1 md:flex-initial" disabled={isSending} />
              </form>
            )}
            {isSending && (
              <div className="flex-1">
                <Spinner color="#239ECB" size={40} tw="mx-auto" />
              </div>
            )}
            {isSuccess !== null && <SubmitionStateAlert isSuccess={isSuccess} handleAlertClose={handleAlertClose} />}
          </div>
        </div>
      </div>
      <style jsx>{`
        input {
          @apply flex-1  border-2 border-[#D6D6D6] bg-grey-100;
          padding: 1.2rem 1.5rem;
          min-width: 8rem;
          border-radius: 0.4rem;
        }
        input[type="date"] {
          @apply bg-[#E7E7E7];
        }
      `}</style>
    </section>
  );
};

export default BookAppointement;
