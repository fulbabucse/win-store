import React from "react";
import electronics from "../assets/electronics.png";
import appliences from "../assets/appliences.png";
import babiesStore from "../assets/babies-store.png";
import fashions from "../assets/fashions.png";
import Image from "next/image";
import Link from "next/link";

const Category = ({ category }) => {
  return (
    <div className="category_container">
      <Image src={electronics} alt="Electronics" className="category_thumb" />
      <div className="category_details">
        <div>
          <h1 className="category_name">{category}</h1>
          <Link href="/" className="category_link">
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
