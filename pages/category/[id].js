import Product from "@/components/Product";
import React from "react";

const Category = ({ products }) => {
  return (
    <div className="category_product_container">
      <div className="grid">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;

export async function getServerSideProps({ params: { id } }) {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${id}`
  );
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
}
