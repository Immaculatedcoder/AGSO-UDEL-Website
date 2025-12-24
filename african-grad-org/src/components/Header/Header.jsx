import React from "react";
import { Link, NavLink } from "react-router-dom";
import agsoLogo from "../../assets/images/agsoLogo.svg";
import "./Header.css";

function Header() {
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
          {/* <nav>
                        {navItems.map(item => {
                            return <a key={item.id} href={item.href}> {item.name}</a>
                        })}
                    </nav> */}

          <nav className="header__nav">
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
              {" "}
              Join AGSO
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
