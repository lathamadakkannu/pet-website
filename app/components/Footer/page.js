import React from "react";
import Link from "next/link";
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter, FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => (
  <footer className="footerContainer">
    <div className="footerMain">
      <div className="contactDetails">
        <Link className="footerLogo" href="/" aria-label="Treasuremount home">
          <img src="/image/footer-logo.png" alt="Treasuremount Pet Shop" />
        </Link>
        <p>
          Find pets, everyday essentials, and local shops to help make life with
          your companion a little easier.
        </p>
        <div className="footerIcons" aria-label="Social media">
          <RiWhatsappFill aria-hidden="true" />
          <FaFacebook aria-hidden="true" />
          <RiInstagramFill aria-hidden="true" />
          <FaSquareXTwitter aria-hidden="true" />
          <FaYoutube aria-hidden="true" />
        </div>
      </div>

      <nav className="explore-detail" aria-label="Explore">
        <h3>Explore</h3>
        <ul>
          <li><Link href="/pages/Pets">Browse pets</Link></li>
          <li><Link href="/pages/Products">Shop pet essentials</Link></li>
          <li><Link href="/pages/Shop">Find a local shop</Link></li>
          <li><Link href="/pages/Blog">Read pet care guides</Link></li>
        </ul>
      </nav>

      <div className="contacts">
        <div className="address">
          <span className="address-icon"><FaLocationDot aria-hidden="true" /></span>
          <div className="address-details">
            <p className="address-head">Our Location</p>
            <p>Tenkasi, Tamil Nadu</p>
          </div>
        </div>
        <div className="address">
          <span className="address-icon"><MdOutlineMailOutline aria-hidden="true" /></span>
          <div className="address-details">
            <p className="address-head">Customer Support</p>
            <a href="mailto:support@yourpetshop.com">support@yourpetshop.com</a>
          </div>
        </div>
      </div>
    </div>
    <div className="footerBottom">
      <p>Made for pets and the people who love them.</p>
    </div>
  </footer>
);

export default Footer;
