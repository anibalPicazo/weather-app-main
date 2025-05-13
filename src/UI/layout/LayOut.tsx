import React, { useState } from "react";
import { FaBars, FaCity, FaCloudSun, FaEnvelope, FaGlobe, FaSignInAlt } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const LayOut: React.FC = () => {
  const [isWeatherDropdownOpen, setWeatherDropdownOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true); // State to toggle sidebar
  const [language, setLanguage] = useState("en"); // Default language: English

  const toggleWeatherDropdown = () => {
    setWeatherDropdownOpen(!isWeatherDropdownOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-200 ">
      {isSidebarOpen && (
        <aside className="w-64 bg-gray-800 p-6 shadow-lg flex flex-col ">
          <nav className="flex flex-col justify-between h-full">
            <ul className="space-y-6 flex flex-col align-space-between w-full">
              <li>
                <button
                  onClick={toggleWeatherDropdown}
                  className="flex items-center gap-3 text-gray-200 hover:text-yellow-400 font-medium focus:outline-none"
                >
                  <FaCloudSun className="text-yellow-400" />
                  Weather
                </button>
                {isWeatherDropdownOpen && (
                  <ul className="mt-2 space-y-3 pl-6">
                    <li className="flex items-center gap-3">
                      <FaCity className="text-gray-400" />
                      <Link
                        to="/weather/london"
                        className="text-gray-200 hover:text-gray-400"
                      >
                        London
                      </Link>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCity className="text-gray-400" />
                      <Link
                        to="/weather/dublin"
                        className="text-gray-200 hover:text-gray-400"
                      >
                        Dublin
                      </Link>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCity className="text-gray-400" />
                      <Link
                        to="/weather/madrid"
                        className="text-gray-200 hover:text-gray-400"
                      >
                        Madrid
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
             
            </ul>
            <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <Link
                  to="/contact"
                  className="text-gray-200 hover:text-blue-400 font-medium"
                >
                  Contact
                </Link>
              </li>
          </nav>
        </aside>
      )}

      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between bg-gray-800 p-4 shadow-md">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="text-gray-200 hover:text-yellow-400 focus:outline-none"
            >
              <FaBars className="text-2xl" />
            </button>
            <h1 className="text-xl font-bold text-gray-200">Weather App</h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaGlobe className="text-gray-400" />
              <select
                value={language}
                onChange={handleLanguageChange}
                className="bg-gray-700 text-gray-200 border border-gray-600 rounded-md p-1 focus:outline-none"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              <FaSignInAlt />
              Login/Logout
            </button>
          </div>
        </header>

        <main className="flex-1 p-6 bg-gray-700">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayOut;