import React from "react";

const Vision = () => {
  return (
    <section className="w-full bg-[#fafafa] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0E4C92]">
            Vision of sankalp Welfare Foundation
          </h1>

          <div className="w-24 h-1 bg-[#f4a51c] mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-600 text-lg leading-8 max-w-5xl mx-auto">
            At sankalp Welfare Foundation, our vision is to create a world where
            every student has access to high-quality education and the resources
            they need to succeed, regardless of their background or
            circumstances. We believe that education is a fundamental right, and
            by investing in the next generation, we can build a more equitable
            and just society for all.
          </p>
        </div>

        {/* Vision Cards */}

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-[#0E4C92] mb-4">
              Every Student Has the Potential to Succeed
            </h2>

            <p className="text-gray-600 leading-8">
              We believe that every student has unique talents and abilities,
              and it is our responsibility to provide the resources and support
              they need to reach their full potential.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-[#0E4C92] mb-4">
              Education is a Powerful Tool for Social Change
            </h2>

            <p className="text-gray-600 leading-8">
              Education is not just about acquiring knowledge and skills, but
              also about developing critical thinking, creativity, and social
              responsibility. It has the power to transform communities and
              build a better future.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-[#0E4C92] mb-4">
              Equity and Access are Essential
            </h2>

            <p className="text-gray-600 leading-8">
              Every student deserves equal access to quality education,
              regardless of their background, identity, or circumstances. We
              are committed to creating opportunities for all.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-[#0E4C92] mb-4">
              Collaboration is the Key
            </h2>

            <p className="text-gray-600 leading-8">
              We work closely with schools, parents, communities, and partner
              organizations because lasting educational impact is only possible
              through collaboration.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition lg:col-span-2">
            <h2 className="text-2xl font-semibold text-[#0E4C92] mb-4">
              Continuous Learning & Improvement
            </h2>

            <p className="text-gray-600 leading-8">
              Learning is a lifelong journey. We constantly improve our
              programmes by adopting new educational research, innovative
              teaching methods, and best practices to meet the changing needs of
              students and society.
            </p>
          </div>

        </div>

        {/* Bottom Section */}

        <div className="bg-[#0E4C92] text-white rounded-xl p-10 mt-14">

          <h2 className="text-3xl font-bold mb-5">
            Together We Can Build a Better Future
          </h2>

          <p className="leading-8 text-lg">
            We are proud of our vision at sankalp Welfare Foundation and remain
            dedicated to achieving it every day. If you share our vision and
            would like to contribute, we warmly welcome your support. Together,
            we can create a brighter future where every child receives the
            education they deserve.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Vision;