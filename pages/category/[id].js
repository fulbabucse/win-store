import Product from "@/components/Product";
import axios from "axios";
import Head from "next/head";
import React from "react";

const Category = ({ products, categoryName }) => {
  return (
    <>
      <Head>
        <title>Win Store | {categoryName}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="category_product_container">
        <div className="grid">
          {products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;

export async function getServerSideProps({ params: { id } }) {
  // Get Dynamic Products by Category
  const { data: products } = await axios.get(
    `https://fakestoreapi.com/products/category/${id}`
  );

  return {
    props: {
      products,
      categoryName: id,
    },
  };
}
