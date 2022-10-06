import DropDown4 from "../../components/Widgets/ServicesDropdown/DropDown4";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["dropDown4", "headDescription"])),
    }, // will be passed to the page component as props
  };
}

const Index = () => {
  const { t } = useTranslation("headDescription");
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.locale === "ar" ? "الفينير - ابتسامة هوليود سمايل" : "Dental Veneer - Hollywood Smile"}</title>
        <meta name="description" content={t("headDescription:veneers")} />
      </Head>
      <section>
        <DropDown4 />
      </section>
    </>
  );
};

export default Index;
