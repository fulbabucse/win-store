import Image from "next/image";
import Link from "next/link";
import React from "react";
import defaultThumb from "../assets/default_thumb.jpg";

const Product = ({ product }) => {
  const { id, title, category, price, image } = product;
  return (
    <div className="product_container">
      <Link href={`/product/${id}`}>
        <div className="product_top_details">
          <h4>{category}</h4>
          <h3>{title.length > 22 ? `${title?.slice(0, 22)}..` : title}</h3>
        </div>
        <div className="product_thumb">
          <Image
            src={image || defaultThumb}
            alt={title}
            width={100}
            height={130}
          />
        </div>
      </Link>
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
