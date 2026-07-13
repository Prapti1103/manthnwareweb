import React from "react";

const Values = () => {
  const values = [
    {
      title: "Excellence",
      description:
        "We are committed to providing the highest quality education and opportunities for our students. Excellence is not only about achieving high standards but also about continuously improving and learning. We strive to ensure that every student receives the knowledge, skills, and values they need to succeed in school and beyond.",
    },
    {
      title: "Equity",
      description:
        "We believe that every student has the right to access high-quality education regardless of their background or circumstances. We are dedicated to breaking barriers and creating equal opportunities so that every learner can achieve their full potential.",
    },
    {
      title: "Integrity",
      description:
        "We conduct ourselves with honesty, transparency, and professionalism in all our activities. Integrity helps us build trust with students, families, schools, and communities while ensuring that all our programs reflect the highest ethical standards.",
    },
    {
      title: "Innovation",
      description:
        "We continuously explore new and innovative approaches to improve education. By embracing modern research, technology, and best practices, we ensure that our programs meet the evolving needs of students and communities.",
    },
    {
      title: "Collaboration",
      description:
        "We work together with schools, parents, educators, and communities because meaningful change is achieved through strong partnerships. Collaboration enables us to create greater opportunities and lasting impact for every student.",
    },
  ];

  return (
    <section className="w-full bg-[#fafafa] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0E4C92]">
            Values of Manthan Welfare Foundation
          </h1>

          <div className="w-24 h-1 bg-[#f4a51c] mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-5xl mx-auto">
            At Manthan Welfare Foundation, our work is guided by a strong set of
            values that reflect our commitment to excellence, equity,
            integrity, innovation, and collaboration. These values provide the
            foundation for our mission of promoting education and creating equal
            opportunities for every student.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-[#0E4C92] mb-4">
                {value.title}
              </h2>

              <p className="text-gray-600 leading-8">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#0E4C92] rounded-xl p-10 mt-14 text-white">
          <h2 className="text-3xl font-bold mb-5">
            Together We Can Build a Better Future
          </h2>

          <p className="text-lg leading-8">
            We are proud of the values that define Manthan Welfare Foundation.
            They inspire every initiative we undertake and every student we
            support. If you share these values and would like to contribute to
            our mission, we invite you to join us in creating a brighter future
            through education.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Values;