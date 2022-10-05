import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/nprogress.css";
import Router from "next/router";
import nProgress from "nprogress";

function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeError ", nProgress.done);
  Router.events.on("routeChangeComplete", nProgress.done);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Dr. AbdulRahman Nahas - Cosmetic and Preventive Dentistry</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <ParallaxProvider>
        <Layout dir={router.locale === "ar" ? "rtl" : "ltr"}>
          <Component {...pageProps} />
        </Layout>
      </ParallaxProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
