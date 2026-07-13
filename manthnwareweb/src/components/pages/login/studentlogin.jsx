import { useState } from "react";
import logo from "../../../assets/images/logo.png";
const Studentlogin = () => {
  const [formData, setFormData] = useState({
    year: "2025-2026",
    studentId: "",
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

    // TODO:
    // Call Student Login API here
  };

  return (
    <div className="min-h-screen bg-[#f3f5fb] flex items-center justify-center px-4">
      <div className="w-full max-w-[430px] bg-white border border-gray-200 shadow-sm p-8">

        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={logo}
            alt="sankalp Welfare Foundation"
            className="w-32 h-auto"
          />
        </div>

        {/* Heading */}
        <h2 className="text-[18px] text-center text-gray-700 mt-5">
          sankalp Welfare Foundation
        </h2>

        <h3 className="text-[18px] text-center text-gray-700 mb-8">
          Student Login
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Year */}
          <div>
            <label className="block mb-2 text-[17px] text-gray-700">
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

          {/* Student ID */}
          <div>
            <label className="block mb-2 text-[17px] text-gray-700">
              Enter Student ID
            </label>

            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              className="w-full h-11 border border-gray-300 px-4 outline-none focus:border-green-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-[17px] text-gray-700">
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

          {/* Button */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="bg-[#49d15f] hover:bg-[#38b74d] text-white text-[22px] font-medium px-10 py-3 rounded-full transition duration-300"
            >
              LOGIN HERE
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Studentlogin;