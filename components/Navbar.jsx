import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";
import cart from "../assets/shopping-cart.png";
import {
  AiOutlineInstagram,
  AiOutlineSearch,
  AiOutlineTwitter,
  AiOutlineUser,
} from "react-icons/ai";
import { BsHeadphones } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Link from "next/link";
import { FaBars, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Navbar = ({ categories }) => {
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className="navbar_container">
      <div className="top_navbar">
        <div className="top_nav_left">
          <div className="logo">
            <Image src={logo} alt="Logo" />
          </div>
          <div>
            <form onSubmit={handleSearch} className="search_field">
              <div className="category_select">
                <select name="category" id="">
                  <option value="All Categories">All Categories</option>
                  {categories?.map((category) => (
                    <option value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <input
                type="text"
                className="input_field"
                placeholder="Search for Products"
              />
              <button className="search_button">
                <AiOutlineSearch className="icon" />
              </button>
            </form>
          </div>
        </div>
        <div className="top_nav_right">
          <div className="contact">
            <small>Call Us Now</small>
            <p>
              <BsHeadphones /> <span>+011 2827918</span>
            </p>
            <button className="signIn_button">Sign In</button>
          </div>
          <div>
            <AiOutlineUser size={25} />
          </div>
          <div>
            <MdOutlineFavoriteBorder size={25} />
          </div>
          <div className="cart">
            <p>3</p>
            <div>
              <Image src={cart} alt="cart" />
              <span>Cart</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sub_navbar">
        <div className="navbar_items">
          <ul>
            <li>
              <FaBars className="dropdown_icon" />
              <button className="dropdown_button">Browse by Category</button>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Easy Monthly Installments</Link>
            </li>
            <li>
              <Link href="/">Shop by Brands</Link>
            </li>
            <li>
              <Link href="/">Become a Vendor</Link>
            </li>
          </ul>
        </div>
        <div className="social_icons">
          <FaFacebookF className="icon" />
          <AiOutlineTwitter className="icon" />
          <FaLinkedinIn className="icon" />
          <AiOutlineInstagram className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
