import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { title: "Home", dropdown: false },
    { title: "AnswerKey 2026", dropdown: false },
    { title: "Exam 2025", dropdown: true },
    { title: "Login", dropdown: true },
    { title: "About", dropdown: true },
    { title: "Gallary", dropdown: true },
    { title: "Downloads", dropdown: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="h-[86px] px-[170px] flex items-center justify-between">

        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-[135px] h-auto object-contain"
        />

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <a
              href="#"
              key={item.title}
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
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
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
            <a
              key={item.title}
              href="#"
              className="flex justify-between items-center px-6 py-4 border-b"
            >
              {item.title}
              {item.dropdown && <FaChevronDown size={12} />}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;