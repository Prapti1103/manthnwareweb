import aboutImage from "../../assets/images/about.jpg";

const About = () => {
  return (
    <section className="bg-[#faf9f5] py-28">

      <div className="mx-auto max-w-[1450px] px-10">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-[46px] font-medium text-[#1c1c1c]">
            About
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-[110px] bg-[#d6a223]" />

          <p className="mt-8 text-[28px] text-[#222]">
            Sankalp Welfare Foundation
          </p>

        </div>

        {/* Content */}

        <div className="mt-24 grid grid-cols-2 gap-24 items-start">

          {/* Left */}

          <div>

            <h3 className="text-[34px] leading-[52px] text-[#1d1d1d]">
              Developing With a Passion While Exploring The World.
            </h3>

            <div className="mt-5 h-[2px] w-[140px] bg-[#d6a223]" />

            <div className="mt-12 space-y-10 text-[23px] leading-[48px] text-[#444]">

              <p>
                At sankalp Welfare Foundation, we believe that education is the
                key to unlocking the potential of every individual and empowering
                them to create a better future for themselves and their
                communities.
              </p>

              <p>
                Our mission is to provide opportunities for students to develop
                knowledge, skills and inspire lifelong learning through quality
                education.
              </p>

              <p>
                We strive for excellence, integrity and compassion while
                creating an inclusive environment where everyone gets equal
                opportunities to learn and grow.
              </p>

              <p>
                We are proud of the work we do and remain dedicated towards
                helping students achieve their full potential.
              </p>

            </div>

            <button className="mt-16 rounded bg-[#f7be38] px-14 py-4 text-[22px] font-medium transition hover:bg-[#e5a800]">
              Contact Us
            </button>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <div className="relative">

              {/* Background Box */}

              <div className="h-[700px] w-[420px] rounded-[18px] bg-[#f8c54a]" />

              {/* Image */}

              <img
                src={aboutImage}
                alt="About"
                className="absolute left-[-20px] top-[120px] h-[470px] w-[430px] rounded-[18px] object-cover shadow-xl"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;