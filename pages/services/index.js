import Head from "next/head";
import Services from "../../components/Services/Services";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

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
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          {router.locale === "ar"
            ? "الخدمة - تعرف على خدماتنا في طب الاسنان"
            : "Service - Dental Treatment Service in Dubai"}
        </title>
        <meta name="description" content={t("headDescription:services")} />
      </Head>
      <Services />
    </>
  );
};

export default services;
