import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

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
    icon: <FaFacebookF />,
    link: "#",
  },
  {
    icon: <FaInstagram />,
    link: "#",
  },
  {
    icon: <FaYoutube />,
    link: "#",
  },
  {
    icon: <FaLinkedinIn />,
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0d2c54] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About */}

          <div>

            <h3 className="text-3xl font-bold mb-5">
              Sankalp Welfare Foundation
            </h3>

            <p className="text-gray-300 leading-8 text-justify">
              Sankalp Welfare Foundation is committed to empowering society
              through education, scholarships, social awareness and community
              development initiatives.
            </p>

            <div className="flex gap-3 mt-7">

              {socialLinks.map((item, index) => (

                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  w-11
                  h-11
                  rounded-full
                  bg-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-[#ffc107]
                  hover:text-black
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
                >
                  {item.icon}
                </a>

              ))}

            </div>

          </div>
                    {/* Quick Links */}

          <div>

            <h5 className="text-xl font-semibold relative inline-block mb-8 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-14 after:h-[3px] after:bg-[#ffc107]">
              Quick Links
            </h5>

            <ul className="space-y-3">

              {quickLinks.map((item, index) => (

                <li key={index}>

                  <Link
                    to={item.link}
                    className="
                      text-gray-300
                      hover:text-[#ffc107]
                      hover:pl-2
                      transition-all
                      duration-300
                    "
                  >
                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Programs */}

          <div>

            <h5 className="text-xl font-semibold relative inline-block mb-8 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-14 after:h-[3px] after:bg-[#ffc107]">
              Programs
            </h5>

            <ul className="space-y-3">

              {programs.map((item, index) => (

                <li key={index}>

                  <Link
                    to="/"
                    className="
                      text-gray-300
                      hover:text-[#ffc107]
                      hover:pl-2
                      transition-all
                      duration-300
                    "
                  >
                    {item}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h5 className="text-xl font-semibold relative inline-block mb-8 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-14 after:h-[3px] after:bg-[#ffc107]">
              Contact Us
            </h5>

            <div className="space-y-5 text-gray-300">

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#ffc107] mt-1 shrink-0" />

                <p className="leading-7">
                  B5, Karan Court,
                  <br />
                  Ahilyanagar,
                  <br />
                  Maharashtra - 414001
                </p>

              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#ffc107]" />

                <p>+91 9130093832</p>

              </div>

              <div className="flex items-center gap-3">

                <FaEnvelope className="text-[#ffc107]" />

                <p>
                  info@sankalpawelfarefoundation.org
                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-white/20 mt-12 pt-6">

          <p className="text-center text-gray-300 text-sm">

            © {new Date().getFullYear()} Sankalpa Welfare Foundation.
            All Rights Reserved.

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;