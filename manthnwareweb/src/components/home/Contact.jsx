import contactData from "../../components/data/contactData";

const Contact = () => {
  return (
    <section className="bg-[#faf9f5] py-24">

      <div className="mx-auto max-w-[1450px] px-10">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-[46px] font-medium">
            Get In Touch
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-[150px] bg-[#d6a223]" />

        </div>

        {/* Content */}

        <div className="mt-20 grid grid-cols-2 gap-20">

          {/* Left */}

          <div>

            <p className="mb-8 text-[20px] text-gray-500">
              Leave us a message
            </p>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="name"
                className="h-[65px] w-full border border-gray-300 bg-white px-5 text-[18px] outline-none"
              />

              <input
                type="email"
                placeholder="contacts@company.com"
                className="h-[65px] w-full border border-gray-300 bg-white px-5 text-[18px] outline-none"
              />

              <textarea
                rows="5"
                placeholder="Write your message here"
                className="w-full border border-gray-300 bg-white p-5 text-[18px] outline-none"
              />

              <button
                className="h-[68px] w-full bg-[#f5bc3b] text-[22px] font-semibold uppercase transition hover:bg-[#e0a600]"
              >
                SEND MESSAGE
              </button>

            </form>

          </div>

          {/* Right */}

          <div className="bg-[#f6f3ec] p-10">

            {/* Map */}

            <div className="overflow-hidden">

              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Ahmednagar&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-[330px] w-full border-0"
              />

            </div>

            <div className="mt-8 space-y-7">

              <p className="text-[20px] leading-9 text-[#444]">
                {contactData.address}
              </p>

              <p className="text-[20px] leading-9 text-[#444]">
                Whatsapp us {contactData.phone}
              </p>

              <div>

                <p className="text-[20px] font-medium">
                  Facebook :
                </p>

                <a
                  href={contactData.facebook}
                  className="mt-2 block break-all text-[18px] text-[#444] hover:text-blue-700"
                >
                  {contactData.facebook}
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;