import heroImage from "../../assets/images/hero.png";
import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-full bg-[#faf9f5] border-t border-[#f2f2f2]">
      <div className="mx-auto flex h-[610px] max-w-[1600px] items-center justify-between px-[150px]">

        {/* LEFT SECTION */}
        <div className="relative flex w-[44%] items-center justify-center">

          {/* Social Icons */}
          <div className="absolute left-[-65px] top-1/2 -translate-y-1/2 flex flex-col gap-7">

            <a href="#">
              <FaLinkedinIn className="text-[33px] text-[#f4a51c] transition duration-300 hover:scale-110" />
            </a>

            <a href="#">
              <FaInstagram className="text-[33px] text-[#f4a51c] transition duration-300 hover:scale-110" />
            </a>

            <a href="#">
              <FaWhatsapp className="text-[33px] text-[#f4a51c] transition duration-300 hover:scale-110" />
            </a>

            <a href="#">
              <FaFacebookF className="text-[33px] text-[#f4a51c] transition duration-300 hover:scale-110" />
            </a>

          </div>

          {/* Hero Image */}
          <img
            src={heroImage}
            alt="sankalp Hero"
            className="w-[590px] object-contain select-none"
            draggable="false"
          />
        </div>

        {/* RIGHT SECTION */}

        <div className="flex w-[56%] flex-col items-center justify-center text-center">

          <p className="mb-8 text-[28px] font-normal text-[#003b7d]">
            Govt. Authorised
          </p>

          <h1 className="text-[40px] font-bold uppercase leading-[72px] text-[#0058a5]">
            sankalp STATE LEVEL GENERAL
            <br />
            KNOWLEDGE EXAMINATION
          </h1>

          <h3 className="mt-9 text-[23px] font-semibold text-[#28166f]">
            Std 1st to Std 8th
          </h3>

          <p className="mt-8 text-[18px] text-[#003b7d]">
            (Marathi, English, Semi-English)
          </p>

        </div>

      </div>
    </section>
  );
};

export default Hero;