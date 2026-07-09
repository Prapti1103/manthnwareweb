import { FaChevronRight } from "react-icons/fa";
import discoverMoreData from "../../components/data/discoverMoreData";

const DiscoverMore = () => {
  return (
    <section className="bg-[#faf9f5] py-20">

      <div className="mx-auto max-w-[1450px] px-10">

        <div className="overflow-hidden rounded border border-[#d8d8d8] bg-white shadow-sm">

          {/* Header */}

          <div className="border-b bg-[#eef5ff] px-8 py-6">

            <h2 className="text-[22px] font-semibold text-[#222]">
              Discover more
            </h2>

          </div>

          {/* List */}

          {discoverMoreData.map((item, index) => (

            <a
              key={index}
              href={item.link}
              className="group flex items-center justify-between border-b border-[#ececec] px-8 py-7 transition-all duration-300 hover:bg-[#f8fbff]"
            >

              <span className="text-[21px] text-[#222] transition-all duration-300 group-hover:translate-x-2">

                {item.title}

              </span>

              <FaChevronRight className="text-[#7b7b7b] transition-all duration-300 group-hover:translate-x-1" />

            </a>

          ))}

        </div>

      </div>

    </section>
  );
};

export default DiscoverMore;