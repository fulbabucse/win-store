import Image from "next/image";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const SingleProduct = ({ product }) => {
  const { title, price, rating, description, image, category } = product;
  const ratingStar = Array.from({ length: 5 }, (_, i) => {
    let number = i + 0.5;

    return (
      <span key={i}>
        {rating.rate >= i + 1 ? (
          <FaStar />
        ) : rating.rate >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar className="text-[16px]" />
        )}
      </span>
    );
  });
  return (
    <div className="single_product_container">
      <div className="product">
        <Image src={image} alt={title} width={350} height={400} />
      </div>
      <div className="product">
        <h2 className="title">{title}</h2>
        <h5 className="category">
          {category}
          <div>
            <p style={{ marginRight: "5px" }}>
              <span style={{ color: "#FEBD69", fontWeight: "600" }}>
                {ratingStar}
              </span>{" "}
              ({rating?.rate})
            </p>
            <p>|</p>
            <span>
              <p>{rating?.count} reviews</p>
            </span>
          </div>
        </h5>
        <p className="desc">{description}</p>
        <h4 className="price">BDT {price}</h4>

        <div className="buy-now">Buy Now</div>
      </div>
    </div>
  );
};

export default SingleProduct;

export async function getServerSideProps({ params: { id } }) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();

  return {
    props: {
      product,
    },
  };
}
