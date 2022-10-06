import Head from "next/head";
import Index from "../components/Index/Index";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["index", "common", "headDescription"])),
    }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  const { t } = useTranslation("headDescription");
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          {router.locale === "ar"
            ? "طبيب أسنانك في دبي - فلنصنع ابتسامة الذكريات الجميلة"
            : "Dr. AbdulRahman Nahas - Cosmetic and Preventive Dentistry"}
        </title>
        <meta name="description" content={t("headDescription:index")} />
      </Head>
      <Index />
    </>
  );
}
