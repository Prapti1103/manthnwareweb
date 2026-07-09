import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import featuresData from "../../components/data/featuresData";

const Features = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#f8f5ef] py-28">

      <div className="mx-auto max-w-[1450px] px-10">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-[46px] font-medium">
            Features
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-[130px] bg-[#d6a223]" />

          <p className="mt-8 text-[24px] text-gray-600">
            Main Features of the Exam
          </p>

        </div>

        {/* Accordion */}

        <div className="mt-20 space-y-6">

          {featuresData.map((item, index) => (

            <div
              key={index}
              className="overflow-hidden rounded bg-white shadow-sm"
            >

              {/* Header */}

              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="flex w-full items-center gap-5 px-8 py-6 text-left"
              >

                {active === index ? (
                  <FaChevronDown className="text-[#d6a223]" />
                ) : (
                  <FaChevronRight />
                )}

                <span
                  className={`text-[24px] font-semibold ${
                    active === index
                      ? "text-[#d6a223]"
                      : "text-[#333]"
                  }`}
                >
                  {item.title}
                </span>

              </button>

              {/* Content */}

              {active === index && (

                <div className="border-t px-10 py-8">

                  <p className="text-[21px] leading-[42px] text-[#555]">
                    {item.content}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Features;