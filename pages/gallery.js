import Head from "next/head";
import Gallery from "../components/Gallery/Gallery";
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
const Index = () => {
  const { t } = useTranslation("headDescription");
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          {router.locale === "ar"
            ? "الصور - فرق الأسنان  قبل وبعد العلاج"
            : "Gallery - Before and after dental treatment"}
        </title>
        <meta name="description" content={t("headDescription:gallery")} />
      </Head>
      <Gallery />
    </>
  );
};

export default Index;
