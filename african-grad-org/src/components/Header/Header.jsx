import { React, useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Fade from "@mui/material/Fade";
import { Zoom } from "@mui/material";
import { styled } from "@mui/material/styles";

import agsoLogo from "../../assets/images/agsoLogo.svg";
import "./Header.css";
import Button from "@mui/material/Button";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  //   Handle Srolling

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // We run only on mount once after the page re-renders and all state changes.

  const navItems = [
    { id: 1, name: "About", href: "/about" },
    { id: 2, name: "Leadership", href: "/leadership" },
    { id: 3, name: "Alumni", href: "/alumni" },
    { id: 4, name: "Events", href: "/events" },
    { id: 5, name: "Contact", href: "/contact" },
  ];

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__items">
          {/* Logo and Brand! */}
          <div className="header__logoBrand">
            {/* Logo! */}
            <div className="header__logo">
              <Link to="/">
                <img src={agsoLogo} alt="AGSO University of Delaware" />
              </Link>
            </div>
            {/* Brand */}
            <div className="header__brand">
              <Link to="/" style={{ textDecoration: "none" }}>
                <h1> AFRICAN GRADUATE STUDENT ORGANIZATION</h1>{" "}
              </Link>
              <a
                href="https://www.udel.edu/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p> University of Delaware</p>
              </a>
            </div>
          </div>

          {/* DeskTop Navigation */}

          <nav className="header__nav">
            <Link className="header__nav-link" to="/">
              Home
            </Link>
            {navItems.map((item) => {
              return (
                <NavLink
                  key={item.id}
                  to={item.href}
                  className="header__nav-link"
                >
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="header__cta">
            <NavLink to="/contact" className="header__cta-button">
              Join AGSO
            </NavLink>
          </div>

          {/* ========= Mobile Menu Button=== */}
          <button
            className="header__mobile-toggle"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            style={{
              transition: "transform 0.3s ease",
              transform: isMenuOpen
                ? "rotate(180deg) scale(1.5)"
                : "rotate(0deg) scale(1.5)",
            }}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {/* =======  --- Mobile Navigation ---- ===== */}
      <Fade
        in={isMenuOpen}
        timeout={{ enter: 200, exit: 200 }}
        mountOnEnter
        unmountOnExit
      >
        <div className="header__mobile-menu">
          <nav className="header__mobile-nav">
            <Link
              to="/"
              className="header__mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {navItems.map((link) => (
              <NavLink
                key={link.id}
                to={link.href}
                className="header__mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}

            <div>
              <NavLink
                to="/contact"
                className="header__mobile-cta"
                onClick={() => setIsMenuOpen(false)}
              >
                JOIN AGSO
              </NavLink>
            </div>
          </nav>
        </div>
      </Fade>
    </header>
  );
}

export default Header;
