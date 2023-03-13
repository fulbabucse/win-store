import Link from "next/link";
import React from "react";

const BestDeals = ({ categories }) => {
  return (
    <div className="best_deals_container">
      <h1 className="title">
        Best <span>Deals</span>
      </h1>

      <div className="category">
        <ul>
          {categories?.map((category) => (
            <li key={category}>
              <Link href={category}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BestDeals;
