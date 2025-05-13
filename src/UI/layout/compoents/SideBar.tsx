import React, { useState } from 'react';
import { FaCity, FaCloudSun, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

  
  
const SideBar: React.FC = () => {
    const [isWeatherDropdownOpen, setWeatherDropdownOpen] = useState(false);

const toggleWeatherDropdown = () => {
    setWeatherDropdownOpen(!isWeatherDropdownOpen);
  };
  
    return (
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
    );
};

export default SideBar;

