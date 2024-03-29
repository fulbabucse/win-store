import Layout from "@/components/Layout";
import { Router } from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import "@/styles/globals.scss";
import "../styles/bestDeals.scss";
import "../styles/footer.scss";
import "../styles/category.scss";
import "../styles/navbar.scss";
import "../styles/hero.scss";
import "../styles/product.scss";

export default function App({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
