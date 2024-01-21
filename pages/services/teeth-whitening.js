import DropDown3 from "../../components/Widgets/ServicesDropdown/DropDown3";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["dropDown3", "headDescription"])),
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
            ? "التبييض - تفتيح درجة لون الاسنان"
            : "Teeth Whitening - Get Brighter teeth in Dubai"}
        </title>
        <meta name="description" content={t("headDescription:teethWhitening")} />
      </Head>
      <section>
        <DropDown3 />
      </section>
    </>
  );
};

export default Index;
