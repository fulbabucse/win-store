import Image from "next/image";
import React, { useEffect, useState } from "react";
import watch from "../assets/watch.png";
import laptop1 from "../assets/laptop-01.png";
import Product from "./Product";

const BestDeals = ({ categories }) => {
  const [getCategory, setGetCategory] = useState("specials");
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${getCategory}`
    );
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, [getCategory]);

  return (
    <div className="best_deals_container">
      <div className="category_top">
        <h1 className="title">
          Best <span>Deals</span>
        </h1>

        <div className="category">
          <ul>
            <li>
              <button
                onClick={() => setGetCategory("specials")}
                className={`${
                  getCategory === "specials" ? "active" : undefined
                }`}
              >
                specials Offer
              </button>
            </li>
            {categories?.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setGetCategory(category)}
                  className={`${
                    category === getCategory ? "active" : undefined
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="display_category">
        {getCategory === "specials" ? (
          <div className="special_offer_grid">
            <div className="first_item">
              <div className="special_discount">
                <h1>
                  <p>Special</p>
                  <span>Offer</span>
                </h1>
                <div className="circle">
                  <h1>
                    40% <br /> Off
                  </h1>
                </div>
              </div>
              <div className="offer_thumb">
                <Image src={watch} />
              </div>
              <div className="offer_details">
                <h3 className="offer_title">Special Watch for Men's</h3>
                <h4 className="offer_price">
                  <span>BDT: 12,790</span>
                  <del>BDT: 14,790</del>
                </h4>
                <p>
                  <span>Already sold: 06</span>
                  <span>Available: 30</span>
                </p>
              </div>
            </div>
            <div className="second_item">
              <div className="special_item_one">
                <div className="left">
                  <h3>Special Laptop's</h3>
                  <h4>
                    <span>BDT: 12,790</span>
                    <del>BDT: 14,790</del>
                  </h4>
                  <div className="square_discount">
                    <h3>
                      Save <br /> 10%
                    </h3>
                  </div>
                </div>
                <div className="right">
                  <h1>
                    <p>Special</p>
                    <span>Offer</span>
                  </h1>
                  <Image src={laptop1} />
                </div>
              </div>
              <div className="special_item_two">hello2</div>
            </div>
            <div>hello 2</div>
          </div>
        ) : (
          <div className="grid">
            {products?.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BestDeals;
