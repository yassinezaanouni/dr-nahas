import React from "react";
import Booking from "../components/Booking/Booking";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    }, // will be passed to the page component as props
  };
}
const book = () => {
  return (
    <div>
      <Booking />
    </div>
  );
};

export default book;
