import Services from "../components/Services/Services";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
      ])),
    }, // will be passed to the page component as props
  };
}
const services = () => {
  return <Services />;
};

export default services;
