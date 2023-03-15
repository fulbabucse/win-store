import React from "react";
import electronics from "../assets/electronics.png";
import menClothes from "../assets/men_clothes.jpg";
import womenClothes from "../assets/women_clothes.jpg";
import jewelry from "../assets/jewelry.jpg";
import Image from "next/image";
import Link from "next/link";

const Category = ({ category }) => {
  return (
    <div className="category_container">
      <div className="category_thumb">
        <Image
          src={
            (category === "electronics" && electronics) ||
            (category === "jewelery" && jewelry) ||
            (category === "men's clothing" && menClothes) ||
            (category === "women's clothing" && womenClothes)
          }
          alt="Electronics"
        />
      </div>
      <div className="category_details">
        <div>
          <h1 className="category_name">{category}</h1>
          <Link href={`/category/${category}`} className="category_link">
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
