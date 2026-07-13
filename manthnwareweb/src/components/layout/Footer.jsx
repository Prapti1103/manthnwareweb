import React from "react";
import "../home/Home CSS/Footer.css";

const quickLinks = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Events", link: "/events" },
  { name: "Gallery", link: "/gallery" },
  { name: "Contact", link: "/contact" },
];

const programs = [
  "State Level GK Exam",
  "Scholarship Program",
  "Social Activities",
  "Career Guidance",
  "Women Empowerment",
];

const socialLinks = [
  {
    icon: "bi bi-facebook",
    link: "#",
  },
  {
    icon: "bi bi-instagram",
    link: "#",
  },
  {
    icon: "bi bi-youtube",
    link: "#",
  },
  {
    icon: "bi bi-linkedin",
    link: "#",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="footer-section">

        <div className="container">

          <div className="row gy-5">

            {/* About */}

            <div className="col-lg-4 col-md-6">

              <h3 className="footer-logo">
                Sankalpa Welfare Foundation
              </h3>

              <p className="footer-about">
               Sankalpa Welfare Foundation is committed to empowering society
                through education, scholarships, social awareness, and
                community development initiatives.
              </p>

              <div className="social-icons">

                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={item.icon}></i>
                  </a>
                ))}

              </div>

            </div>

            {/* Quick Links */}

            <div className="col-lg-2 col-md-6">

              <h5>Quick Links</h5>

              <ul>

                {quickLinks.map((item, index) => (

                  <li key={index}>
                    <a href={item.link}>{item.name}</a>
                  </li>

                ))}

              </ul>

            </div>

            {/* Programs */}

            <div className="col-lg-3 col-md-6">

              <h5>Programs</h5>

              <ul>

                {programs.map((item, index) => (

                  <li key={index}>
                    <a href="/">{item}</a>
                  </li>

                ))}

              </ul>

            </div>

            {/* Contact */}

            <div className="col-lg-3 col-md-6">

              <h5>Contact Us</h5>

              <p>
                <i className="bi bi-geo-alt-fill"></i>

                B5, Karan Court,
                Ahilyanagar,
                Maharashtra - 414001

              </p>

              <p>
                <i className="bi bi-telephone-fill"></i>

                +91 9130093832

              </p>

              <p>
                <i className="bi bi-envelope-fill"></i>

                info@Sankalpawelfarefoundation.org

              </p>

            </div>

          </div>

          <hr />

          <div className="footer-bottom">

            <p>
              © {new Date().getFullYear()} Sankalpa Welfare Foundation. All
              Rights Reserved.
            </p>

          </div>

        </div>

      </footer>
    </>
  );
};

export default Footer;