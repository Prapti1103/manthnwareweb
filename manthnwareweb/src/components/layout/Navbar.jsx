import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

const menuItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "AnswerKey 2026",
    link: "/answerkey2026",
  },
  {
    title: "Exam 2025",
    submenu: [
      {
        title: "राज्यस्तरीय गुणवत्ताधारक यादी - 2025",
        link: "/state-rank-2025",
      },
      {
        title: "जिल्हा / विभागस्तरीय गुणवत्ताधारक यादी - 2025",
        link: "/district-rank-2025",
      },
      {
        title: "केंद्रस्तरीय गुणवत्ताधारक यादी",
        link: "/center-rank-2025",
      },
      {
        title: "Results 2025",
        link: "/results2025",
      },
      {
        title: "MGKE 2025 Answerkey",
        link: "/mgke-answerkey2025",
      },
    ],
  },
  {
    title: "Login",
    submenu: [
      {
        title: "Student Login",
        link: "/studentlogin",
      },
      {
        title: "School Login",
        link: "/schoollogin",
      },
      {
        title: "Coordinator Login",
        link: "/coordinatorlogin",
      },
    ],
  },
  {
    title: "About",
    submenu: [
      {
        title: "Vision of Manthan Welfare Foundation",
        link: "/vision",
      },
      {
        title: "Values of Manthan Welfare Foundation",
        link: "/values",
      },
    ],
  },
  {
    title: "Gallery",
    submenu: [
      {
  title: "मंथन पारितोषिक वितरण समारंभ – 2025",
  link: "/award-ceremony-2025",
},
{
  title: "मंथन राज्यस्तरीय पारितोषिक वितरण समारंभ – २०२४",
  link: "/state-award-ceremony-2024",
},
{
  title: "मंथन जिल्हास्तरीय पारितोषिक वितरण समारंभ – २०२४",
  link: "/district-award-ceremony-2024",
},
{
  title: "मंथन पारितोषिक वितरण समारंभ – २०२३",
  link: "/award-ceremony-2023",
},
    ],
  },
  {
    title: "Downloads",
    submenu: [
      {
  title: "Manthan-MGKE-Brochure (मराठी)",
  link: "/brochure-marathi",
},
{
  title: "Manthan-MGKE-Brochure (English)",
  link: "/brochure-english",
},
{
  title: "Application Form",
  link: "/application-form",
},
    ],
  },
];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1400px] mx-auto h-[86px] px-8 xl:px-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-[135px] object-contain"
          />
        </Link>

                {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-9">

          {menuItems.map((item) => (

            <div
              key={item.title}
              className="relative group h-[86px] flex items-center"
            >

              {item.submenu ? (
                <>
                  <button
                    className="
                      flex
                      items-center
                      gap-1
                      text-[17px]
                      font-medium
                      text-[#222]
                      hover:text-[#f4a51c]
                      transition-colors
                      duration-200
                    "
                  >
                    {item.title}

                    <FaChevronDown
                      size={10}
                      className="
                        transition-transform
                        duration-200
                        group-hover:rotate-180
                      "
                    />
                  </button>

                  {/* Dropdown */}

                  <div
                    className="
                      absolute
                      left-0
                      top-full
                      min-w-[330px]
                      bg-white
                      border
                      border-gray-200
                      border-t-[3px]
                      border-t-[#f4a51c]
                      shadow-xl
                      opacity-0
                      invisible
                      group-hover:opacity-100
                      group-hover:visible
                      transition-all
                      duration-200
                      z-50
                    "
                  >

                    {item.submenu.map((sub) => (

                      <Link
                        key={sub.title}
                        to={sub.link}
                        className="
                          block
                          px-5
                          py-4
                          text-[15px]
                          leading-6
                          text-[#444]
                          border-b
                          border-gray-100
                          last:border-b-0
                          hover:bg-[#f7f7f7]
                          hover:text-[#f4a51c]
                          transition-colors
                          duration-200
                        "
                      >
                        {sub.title}
                      </Link>

                    ))}

                  </div>

                </>
              ) : (

                <Link
                  to={item.link}
                  className={`
                    text-[17px]
                    font-medium
                    transition-colors
                    duration-200
                    ${
                      item.title === "Home"
                        ? "text-[#f4a51c]"
                        : "text-[#222] hover:text-[#f4a51c]"
                    }
                  `}
                >
                  {item.title}
                </Link>

              )}

            </div>

          ))}

        </nav>
                {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-[#222]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">

          {menuItems.map((item) => (
            <div key={item.title}>

              {item.submenu ? (
                <>
                  <button
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === item.title ? null : item.title
                      )
                    }
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      px-6
                      py-4
                      border-b
                      border-gray-200
                      text-[#222]
                      font-medium
                    "
                  >
                    <span>{item.title}</span>

                    <FaChevronDown
                      size={12}
                      className={`transition-transform duration-300 ${
                        mobileDropdown === item.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileDropdown === item.title && (
                    <div className="bg-[#fafafa]">

                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.title}
                          to={sub.link}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileDropdown(null);
                          }}
                          className="
                            block
                            px-10
                            py-3
                            border-b
                            border-gray-200
                            text-[15px]
                            text-[#444]
                            hover:bg-[#f4a51c]
                            hover:text-white
                            transition-all
                            duration-200
                          "
                        >
                          {sub.title}
                        </Link>
                      ))}

                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="
                    block
                    px-6
                    py-4
                    border-b
                    border-gray-200
                    text-[#222]
                    hover:text-[#f4a51c]
                    transition-colors
                    duration-200
                  "
                >
                  {item.title}
                </Link>
              )}

            </div>
          ))}

        </div>
      )}
    </header>
  );
};

export default Navbar;