import DropDown1 from "../../components/Widgets/ServicesDropdown/DropDown1";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["dropDown1", "headDescription"])),
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
            ? "تصميم الابتسامة الرقمية - صمم ابتسامتك مع طبيب الأسنان"
            : "Digital Smile Design - Design your perfect smile"}
        </title>
        <meta name="description" content={t("headDescription:digitalSmile")} />
      </Head>
      <section>
        <DropDown1 />
      </section>
    </>
  );
};

export default Index;
