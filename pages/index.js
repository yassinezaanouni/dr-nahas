import Head from "next/head";
import Image from "next/image";
import Index from "../components/Index/Index";
import styles from "../styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["index", "common"])),
    }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  return (
    <div>
      <Index />
    </div>
  );
}
