import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
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
        <div className="top_nav_right"></div>
      </div>
      <div className="sub_navbar"></div>
    </div>
  );
};

export default Navbar;
