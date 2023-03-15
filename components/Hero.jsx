import React from "react";
import Category from "./Category";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = ({ categories }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="hero_container">
      <div className="banner">
        <div className="banner_image">
          <div className="banner_left">
            <h1 className="banner_title">
              Shop
              <span>
                Computer <br /> & experience
              </span>
            </h1>
            <p className="banner_subtitle">
              You cannot inspect Quality info the Product; It is already there.
              I Am not a Product of my circumstances. I Am a Product of my
              decisions.
            </p>
            <button className="banner_button">View More</button>
          </div>
          <div className="banner_right">
            <h1>
              40% <br /> Off
            </h1>
          </div>
        </div>
        <div className="banner-icons">
          <div className="active"></div>
          <div className="unActive"></div>
          <div className="unActive"></div>
        </div>
      </div>
      <div className="category_section">
        <button className="left_arrow">
          <MdArrowBackIos size={30} />
        </button>
        <div className="category_grid">
          <Slider {...settings}>
            {categories?.map((category, i) => (
              <Category key={i} category={category} />
            ))}
          </Slider>
        </div>
        <button className="right_arrow">
          <MdArrowForwardIos size={30} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
