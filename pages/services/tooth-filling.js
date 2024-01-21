import DropDown5 from "../../components/Widgets/ServicesDropdown/DropDown5";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["dropDown5", "headDescription"])),
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
          {router.locale === "ar" ? "حشوات الأسنان - علاج تسوس الاسنان" : "Tooth Filling - Treat your teeth cavities"}
        </title>
        <meta name="description" content={t("headDescription:toothFilling")} />
      </Head>
      <section>
        <DropDown5 />
      </section>
    </>
  );
};

export default Index;
