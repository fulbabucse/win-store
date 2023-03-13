import React from "react";
import Product from "./Product";

const NewArrival = ({ products }) => {
  return (
    <div className="arrival_container">
      <h1 className="title">
        New <span>Arrival</span>
      </h1>

      <div className="grid">
        {products?.slice(0, 10)?.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
