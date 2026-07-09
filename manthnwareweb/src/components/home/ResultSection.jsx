import resultData from "../../components/data/resultData";

const ResultSection = () => {
  return (
    <section className="bg-white py-12">

      <div className="mx-auto flex max-w-[1600px] justify-end px-[150px]">

        <div className="w-[580px] space-y-6">

          {resultData.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`${item.bg}
                h-[76px]
                rounded-[14px]
                border
                border-[#f3a600]
                shadow-sm
                transition-all
                duration-300
                hover:shadow-lg
                hover:-translate-y-1
                cursor-pointer`}
              >
                <div className="flex h-full items-center px-6">

                  <Icon
                    className="mr-8 text-[30px] text-[#0c2d97]"
                  />

                  <h3 className="flex-1 text-center text-[22px] font-semibold leading-7 text-[#0c2d97]">
                    {item.title}
                  </h3>

                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};

export default ResultSection;