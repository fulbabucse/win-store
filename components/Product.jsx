import Image from "next/image";
import React from "react";

const Product = ({ product }) => {
  const { id, title, category, price, rating, image, description } = product;
  return (
    <div className="product_container">
      <div className="product_top_details">
        <h4>{category}</h4>
        <h3>{title.length > 22 ? `${title?.slice(0, 22)}..` : title}</h3>
      </div>
      <div className="product_thumb">
        <Image src={image} alt={title} width={100} height={130} />
      </div>
      <div className="product_button_details">
        <h4>
          <del>BDT {price}</del> <span>BDT {price}</span>
        </h4>
        <button className="product_button">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
