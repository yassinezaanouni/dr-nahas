import Head from "next/head";
import Booking from "../components/Booking/Booking";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "headDescription"])),
    }, // will be passed to the page component as props
  };
}
const book = () => {
  const { t } = useTranslation("headDescription");
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          {router.locale === "ar"
            ? "الحجز - احجز موعدك الان  في عيادة طب الاسنان"
            : "Booking - Book now with a dentist in Dubai"}
        </title>
        <meta name="description" content={t("headDescription:booking")} />
      </Head>
      <Booking />
    </>
  );
};

export default book;
