import {
  guideCards,
  discoverLeft,
  discoverRight,
} from "../../components/data/howToGuideData";

import { FaChevronRight } from "react-icons/fa";

const HowToGuide = () => {
  return (
    <section className="bg-[#faf9f5] py-24">

      <div className="mx-auto max-w-[1400px] px-10">

        {/* Heading */}

        <div className="mb-14 text-center">

          <h2 className="text-[44px] font-medium text-[#111]">
            How to Guide
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-[180px] bg-[#d7a11f]" />

        </div>

        <div className="grid grid-cols-12 gap-8">

          {/* LEFT */}

          <div className="col-span-9">

            {/* Top Cards */}

            <div className="grid grid-cols-2 gap-8">

              {guideCards.slice(0, 2).map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-[#070060] p-10 shadow-lg transition hover:-translate-y-1"
                >
                  <h3 className="text-[22px] font-medium leading-10 text-[#f8c547]">
                    {item.title}
                  </h3>
                </div>
              ))}

            </div>

            {/* Bottom Card */}

            <div className="mt-8 w-[48%] rounded-2xl bg-[#070060] p-10 shadow-lg transition hover:-translate-y-1">

              <h3 className="text-[22px] font-medium leading-10 text-[#f8c547]">
                {guideCards[2].title}
              </h3>

            </div>

            {/* Discover */}

            <div className="mt-14 overflow-hidden rounded border">

              <div className="bg-[#eef4ff] px-8 py-6 text-[32px] font-semibold">
                Discover more
              </div>

              {discoverLeft.map((item, index) => (
                <div
                  key={index}
                  className="flex cursor-pointer items-center justify-between border-t px-8 py-7 text-[22px] hover:bg-gray-50"
                >
                  {item}

                  <FaChevronRight className="text-gray-400" />
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div className="col-span-3 overflow-hidden rounded border">

            <div className="bg-[#eef4ff] px-8 py-6 text-[32px] font-semibold">
              Discover more
            </div>

            {discoverRight.map((item, index) => (
              <div
                key={index}
                className="flex cursor-pointer items-center justify-between border-t px-8 py-7 text-[22px] hover:bg-gray-50"
              >
                {item}

                <FaChevronRight className="text-gray-400" />
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default HowToGuide;