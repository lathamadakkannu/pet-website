"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaRegBell, FaTimes } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDemoUserName } from "../../lib/demoSession";
import LoginModal from "../Login/LoginModal";

const links = [
  { label: "Home", href: "/" },
  { label: "Pets", href: "/pages/Pets" },
  { label: "Products", href: "/pages/Products" },
  { label: "Shops", href: "/pages/Shop" },
  { label: "Blog", href: "/pages/Blog" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [hasDemoSession, setHasDemoSession] = useState(false);
  const [demoUserName, setDemoUserName] = useState("");
  const menuRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsLoginOpen(false);
    const userName = getDemoUserName();
    setHasDemoSession(Boolean(userName));
    setDemoUserName(userName || "");
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.classList.remove("menu-open");
      return undefined;
    }

    document.body.classList.add("menu-open");

    const handlePointerDown = (event) => {
      if (!menuRef.current?.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
    <header className="navbarMain">
      <div className="navbarContainer">
        <nav className="navbar" aria-label="Main navigation">
          <div className="navIcons" ref={menuRef}>
            <button
              className="menuToggle"
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
            </button>

            <Link className="logo" href="/" aria-label="Treasuremount home">
              <img src="/image/logo.png" alt="Treasuremount" />
            </Link>

            <ul className={`navItems ${isMenuOpen ? "active" : ""}`}>
              {links.map(({ label, href }) => {
                const isActive =
                  href === "/"
                    ? pathname === "/"
                    : href.startsWith("/#")
                      ? false
                      : pathname.startsWith(href);

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={isActive ? "active" : ""}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rightMenu">
            {/* <Link
              href="/pages/Notification"
              className="iconLink"
              aria-label="Notifications"
            >
              <FaRegBell aria-hidden="true" />
            </Link> */}
            {hasDemoSession ? (
              <Link
                href="/pages/Profile"
                className="accountLink loggedIn"
                aria-label={`Open ${demoUserName}'s profile`}
              >
                <span className="helloText">{demoUserName}</span>
                <span className="accountAvatar" aria-hidden="true">
                  <FiUser />
                </span>
              </Link>
            ) : (
              <button
                type="button"
                className="accountLink loggedOut"
                aria-label="Sign in"
                onClick={() => setIsLoginOpen(true)}
              >
                <span className="helloText">Sign in</span>
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
    {isLoginOpen && (
      <LoginModal
        onClose={() => setIsLoginOpen(false)}
        onSignedIn={(name) => {
          setHasDemoSession(true);
          setDemoUserName(name);
          setIsLoginOpen(false);
        }}
      />
    )}
    </>
  );
};

export default Navbar;
