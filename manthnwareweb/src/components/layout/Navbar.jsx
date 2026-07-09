import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileLoginOpen, setMobileLoginOpen] = useState(false);

  const menuItems = [
    { title: "Home", link: "/", dropdown: false },
    { title: "AnswerKey 2026", link: "/answerkey2026", dropdown: false },
    { title: "Exam 2025", link: "/exam2025", dropdown: true },
    {
      title: "Login",
      dropdown: true,
      submenu: [
        { title: "Student Login", link: "/studentlogin" },
        { title: "School Login", link: "/schoollogin" },
        { title: "Coordinator Login", link: "/coordinatorlogin" },
      ],
    },
    { title: "About", link: "/about", dropdown: true },
    { title: "Gallary", link: "/gallery", dropdown: true },
    { title: "Downloads", link: "/downloads", dropdown: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="h-[86px] px-[170px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-[135px] h-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <div key={item.title} className="relative group">
              {item.submenu ? (
                <>
                  <button
                    className="flex items-center gap-1 text-[18px] font-normal text-[#222] hover:text-[#f4a51c] transition"
                  >
                    {item.title}
                    <FaChevronDown className="text-[11px] mt-[2px]" />
                  </button>

                  {/* Login Dropdown */}
                  <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.title}
                        to={sub.link}
                        className="block px-5 py-3 text-[15px] text-gray-700 hover:bg-[#f4a51c] hover:text-white transition"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.link}
                  className={`flex items-center gap-1 text-[18px] font-normal transition duration-300 ${
                    item.title === "Home"
                      ? "text-[#f4a51c]"
                      : "text-[#222] hover:text-[#f4a51c]"
                  }`}
                >
                  {item.title}
                  {item.dropdown && (
                    <FaChevronDown className="text-[11px] mt-[2px]" />
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t bg-white">
          {menuItems.map((item) => (
            <div key={item.title}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => setMobileLoginOpen(!mobileLoginOpen)}
                    className="w-full flex justify-between items-center px-6 py-4 border-b"
                  >
                    <span>{item.title}</span>
                    <FaChevronDown
                      size={12}
                      className={`transition-transform ${
                        mobileLoginOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileLoginOpen && (
                    <div className="bg-gray-50">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.title}
                          to={sub.link}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileLoginOpen(false);
                          }}
                          className="block px-10 py-3 border-b text-gray-700 hover:bg-[#f4a51c] hover:text-white"
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
                  className="flex justify-between items-center px-6 py-4 border-b hover:text-[#f4a51c]"
                >
                  {item.title}
                  {item.dropdown && <FaChevronDown size={12} />}
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