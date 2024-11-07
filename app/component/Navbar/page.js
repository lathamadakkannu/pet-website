"use client";

import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaRegHeart,
  FaRegUserCircle,
  FaChevronDown,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isBreedOpen, setIsBreedOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close dropdowns when closing the menu
    if (isMenuOpen) {
      setIsAboutDropdownOpen(false);
      setIsCoursesDropdownOpen(false);
      setIsBreedOpen(false);
    }
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    setIsCoursesDropdownOpen(false); // Close Courses dropdown when About is opened
    setIsBreedOpen(false);
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
    setIsAboutDropdownOpen(false); // Close About dropdown when Courses is opened
    setIsBreedOpen(false);
  };
  const toggleBreedDropdown = () => {
    setIsBreedOpen(!isBreedOpen);
    setIsAboutDropdownOpen(false); // Close About dropdown when Courses is opened
    setIsCoursesDropdownOpen(false);
  };

  return (
    <div className={styles.navbarMain}>
      <div className={styles.navbarContainer}>
        <nav className={styles.navbar}>
          {/* Logo Section */}
          <div className={styles.navIcons}>
            <div className={styles.logo}>
              <Link href="/">
                <img
                  src="/image/logo.webp"
                  alt="Logo"
                  width={200}
                  height={65}
                />
              </Link>
            </div>

            {/* Hamburger and Close Icons */}
            <div className={styles.menuToggle} onClick={toggleMenu}>
              {!isMenuOpen ? (
                <FaBars className={styles.icon} />
              ) : (
                <FaTimes className={styles.icon} />
              )}
            </div>

            {/* Navigation Items */}
            <ul
              className={`${styles.navItems} ${
                isMenuOpen ? styles.active : ""
              }`}
            >
              <li>
                <Link href="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>

              {/* About with Dropdown */}
              <li
                className={`${styles.hasDropdown} ${
                  isAboutDropdownOpen ? styles.dropdownActive : ""
                }`}
                onClick={toggleAboutDropdown}
              >
                Pets
                <FaChevronDown className={styles.dropdownIcon} />
                {isAboutDropdownOpen && (
                  <ul className={styles.dropdown}>
                    <li>
                      <Link href="/pages/Dogs" onClick={toggleMenu}>
                       Dog
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/Cats" onClick={toggleMenu}>
                      Cat
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/Birds" onClick={toggleMenu}>
                       Birds
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/Aquarium" onClick={toggleMenu}>
                      Aquarium 
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/FarmAnimals" onClick={toggleMenu}>
                      Farm Animals 
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Courses with Dropdown */}
              <li
                className={`${styles.hasDropdown} ${
                  isCoursesDropdownOpen ? styles.dropdownActive : ""
                }`}
                onClick={toggleCoursesDropdown}
              >
                Foods
                <FaChevronDown className={styles.dropdownIcon} />
                {isCoursesDropdownOpen && (
                 <ul className={styles.dropdown}>
                 <li>
                   <Link href="/pages/Products/DogFood" onClick={toggleMenu}>
                   Pet Food
                   </Link>
                 </li>
                 <li>
                   <Link href="/pages/Products/DogFood" onClick={toggleMenu}>
                  Pet Accessories
                   </Link>
                 </li>
                 
               </ul>
                )}
              </li>

              <li
                className={`${styles.hasDropdown} ${
                  isAboutDropdownOpen ? styles.dropdownActive : ""
                }`}
                onClick={toggleBreedDropdown}
              >
                List Your Pet 
                <FaChevronDown className={styles.dropdownIcon} />
                {isBreedOpen && (
                  <ul className={styles.dropdown}>
                    <li>
                      <Link href="/" onClick={toggleMenu}>
                       For Sales
                      </Link>
                    </li>
                    <li>
                      <Link href="/" onClick={toggleMenu}>
                      For Buy
                      </Link>
                    </li>
                    <li>
                      <Link href="/" onClick={toggleMenu}>
                        For Adoption
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              
              <li>
                <Link href="/" onClick={toggleMenu}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Side Icons and Text */}
          <div className={styles.rightMenu}>
  <div className={styles.searchWrapper}>
    <input type="text" placeholder="Search..." className={styles.searchInput} />
    <FaSearch className={styles.icon} />
  </div>
  <Link href="/pages/Card">
    <FaRegHeart className={styles.icon} />
  </Link>
  <Link href="/component/ProfilePage">
    <FaRegUserCircle className={styles.icon} />
  </Link>
  <span className={styles.helloText}>Order</span>
</div>

        </nav>
      </div>
    </div>
  );
};

export default Navbar;
