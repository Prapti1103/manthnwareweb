import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#faf9f5] py-10">

      <div className="mx-auto flex max-w-[1450px] items-center justify-between px-10">

        {/* Logo */}

        <img
          src={logo}
          alt="Logo"
          className="w-[95px]"
        />

        {/* Copyright */}

        <div className="text-center">

          <p className="text-[20px] text-[#222]">
            © 2026 Manthan Welfare Foundation.
          </p>

          <p className="mt-2 text-[20px] text-[#222]">
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;