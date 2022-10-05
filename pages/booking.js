import Head from "next/head";
import Booking from "../components/Booking/Booking";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "headDescription"])),
    }, // will be passed to the page component as props
  };
}
const book = () => {
  const { t } = useTranslation("headDescription");

  return (
    <>
      <Head>
        <meta name="description" content={t("headDescription:booking")} />
      </Head>
      <Booking />
    </>
  );
};

export default book;
