import { useState } from "react";

import logo from "../../../assets/images/logo.png";
const Coordinatorlogin = () => {
  const [formData, setFormData] = useState({
    year: "2025-2026",
    coordinatorId: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Coordinator Login API
  };

  return (
    <div className="min-h-screen bg-[#f3f5fb] flex items-center justify-center px-4">
      <div className="w-full max-w-[430px] bg-white border border-gray-200 shadow-sm p-8">

        <div className="flex justify-center">
          <img
            src={logo}
            alt="sankalp Welfare Foundation"
            className="w-32"
          />
        </div>

        <h2 className="text-center text-[18px] mt-5 text-gray-700">
          sankalp Welfare Foundation
        </h2>

        <h3 className="text-center text-[18px] mb-8 text-gray-700">
          Coordinator Login
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block mb-2 text-gray-700">
              Select Year
            </label>

            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full h-11 border border-gray-300 px-4 outline-none focus:border-green-500"
            >
              <option>2025-2026</option>
              <option>2024-2025</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              Enter Coordinator ID
            </label>

            <input
              type="text"
              name="coordinatorId"
              value={formData.coordinatorId}
              onChange={handleChange}
              className="w-full h-11 border border-gray-300 px-4 outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              Enter Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-11 border border-gray-300 px-4 outline-none focus:border-green-500"
            />
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="bg-[#49d15f] hover:bg-[#39be50] text-white text-xl px-10 py-3 rounded-full transition"
            >
              LOGIN HERE
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default Coordinatorlogin;