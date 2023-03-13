import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import visa from "../assets/visa.png";
import masterCard from "../assets/masterCard.png";
import cash from "../assets/cash.png";
import easyInstallment from "../assets/easyInstallment.png";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_top">
        <div className="footer_nav">
          <div className="company_info">
            <Link href="/">
              <Image src={logo} />
            </Link>
            <h1 className="title">Get question? Call Us 24/7!</h1>
            <p className="contact_number">
              <a href="tel:03111666144">03 111 666 144</a>
              <br />
              <a href="tel:03111666145">03 111 666 145</a>
            </p>

            <div>
              <h1 className="title">Contact Info</h1>
              <Link href="/">info@win-store.com.bd</Link>
            </div>

            <div className="social_icons">
              <FaFacebookF className="icon" />
              <AiOutlineTwitter className="icon" />
              <FaLinkedinIn className="icon" />
              <AiOutlineInstagram className="icon" />
            </div>
          </div>
          <div className="trending">
            <h3 className="footer_title">Trending</h3>

            <ul className="footer_link">
              <li>
                <Link href="/">Installments</Link>
              </li>
              <li>
                <Link href="/">Electronics</Link>
              </li>
              <li>
                <Link href="/">Grocery</Link>
              </li>
              <li>
                <Link href="/">Health & Beauty</Link>
              </li>
              <li>
                <Link href="/">Home Appliances</Link>
              </li>
              <li>
                <Link href="/">Mobile Accessories</Link>
              </li>
            </ul>
          </div>
          <div className="information">
            <h3 className="footer_title">Information</h3>

            <ul className="footer_link">
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
              <li>
                <Link href="/">FAQs</Link>
              </li>
              <li>
                <Link href="/">Shipping & Returns</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="customer_care">
            <h3 className="footer_title">Trending</h3>

            <ul className="footer_link">
              <li>
                <Link href="/">My Account</Link>
              </li>
              <li>
                <Link href="/">Track Your Orders</Link>
              </li>
              <li>
                <Link href="/">Recently Viewed</Link>
              </li>
              <li>
                <Link href="/">Wishlist</Link>
              </li>
              <li>
                <Link href="/">Compare</Link>
              </li>
              <li>
                <Link href="/">Become a Vendor</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="payment_methods">
          <div>
            <Image src={visa} />
            <Image src={masterCard} />
            <Image src={cash} />
            <Image src={easyInstallment} />
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <p>&copy; {new Date().getFullYear()} Winstore. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
