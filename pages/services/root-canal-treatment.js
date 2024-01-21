import DropDown2 from "../../components/Widgets/ServicesDropdown/DropDown2";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["dropDown2", "headDescription"])),
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
            ? "علاج عصب الأسنان - تخلص من ألم ووجع الاسنان"
            : "Root Canal Treatment - Treat your toothache"}
        </title>
        <meta name="description" content={t("headDescription:rootCanalTreatment")} />
      </Head>
      <section>
        <DropDown2 />
      </section>
    </>
  );
};

export default Index;
