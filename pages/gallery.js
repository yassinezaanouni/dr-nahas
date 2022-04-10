import Gallery from "../components/Gallery/Gallery";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    }, // will be passed to the page component as props
  };
}
const gallery = () => {
  return (
    <div>
      <Gallery />
    </div>
  );
};

export default gallery;
