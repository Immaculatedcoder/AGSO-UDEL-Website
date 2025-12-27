import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    // { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About Us", href: "/about" },
    { id: 3, name: "Leadership", href: "/leadership" },
    { id: 4, name: "Events", href: "/events" },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Top section */}
        <div className="footer__container-top">
          {/* About */}
          <div className="footer-about__container">
            <h3> About AGSO</h3>
            <p>
              The African Graduate Student Organization at the University of
              Delaware fosters community, celebrates African culture, and
              support graduate students.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-quickLinks__container">
            <h3> Quick Links</h3>
            <nav className="footer-quickLinks_subcontainer">
              <Link to="/" className="footer-quickLinks__nav-link">
                Home
              </Link>
              {quickLinks.map((links) => {
                return (
                  <NavLink
                    key={links.id}
                    to={links.href}
                    className="footer-quickLinks__nav-link"
                  >
                    {links.name}
                  </NavLink>
                );
              })}
            </nav>
          </div>

          {/* Connect */}
          <div className="footer-connect__container">
            <h3> Connect With Us</h3>
            <div className="footer__icons">
              <a href="#">
                <InstagramIcon />
              </a>
              <a href="https://chat.whatsapp.com/IBCGw0bqiWNHk2s3bpAk6E">
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__container-divider"></div>

        <div className="footer__container-buttom">
          <p>
            © {currentYear} African Graduate Student Organization. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
