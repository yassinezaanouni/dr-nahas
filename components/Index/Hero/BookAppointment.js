import { Button } from "../../Widgets/Button";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const BookAppointment = () => {
  const { t } = useTranslation("common");
  const [values, setValues] = useState({
    name: "",
    email: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    console.log({ values });
    emailjs.send("service_cf25axc", "template_w4hqdka", values, "Pi2u0fzb8a1Qr03YS").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="f-ai-c mt-12 flex-wrap justify-between gap-8 rounded-2xl bg-grey-100 py-12 px-6 md:mx-8 md:px-16 lg:mt-20 lg:flex-nowrap lg:px-24">
      <div className="flex-1">
        <div className="absolute  -translate-y-1/4	">
          <Image src="/widgets/points.svg" alt="" width="143" height={"105"} />
        </div>{" "}
        <h2 className="relative ml-8 ">{t("book")}</h2>
      </div>

      <form className="z-10 flex  flex-1  flex-wrap gap-7" onSubmit={sendEmail}>
        <div className="flex flex-1 flex-col gap-7">
          <input type="text" name="name" placeholder={t("name")} required onChange={handleChange} />
          <input type="date" name="date" required onChange={handleChange} />
        </div>
        <div className="flex flex-1 flex-col gap-7">
          <input type="email" name="email" placeholder={t("email")} required onChange={handleChange} />

          <Button text={t("bookBtn")} tw={"flex-1"} />
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
