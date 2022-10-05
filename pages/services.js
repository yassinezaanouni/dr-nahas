import Head from "next/head";
import Services from "../components/Services/Services";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "index",
        "common",
        "services",
        "dropDown1",
        "dropDown2",
        "dropDown3",
        "dropDown4",
        "dropDown5",
        "headDescription",
      ])),
    }, // will be passed to the page component as props
  };
}
const services = () => {
  const { t } = useTranslation("headDescription");

  return (
    <>
      <Head>
        <meta name="description" content={t("headDescription:services")} />
      </Head>
      <Services />
    </>
  );
};

export default services;
