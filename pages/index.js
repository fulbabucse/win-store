import BestDeals from "@/components/BestDeals";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NewArrival from "@/components/NewArrival";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({ categories, products }) {
  return (
    <>
      <Head>
        <title>Win Store | Home page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Navbar categories={categories} />
        <Hero categories={categories} />
        <NewArrival products={products} />
        <BestDeals categories={categories} />
        <Footer />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await res.json();

  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  return {
    props: {
      categories,
      products,
    },
    revalidate: 60,
  };
};
