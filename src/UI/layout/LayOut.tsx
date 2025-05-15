import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaGlobe, FaSignInAlt } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import SideBar from "./compoents/SideBar";

const LayOut: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [language, setLanguage] = useState("en");
  const {i18n} = useTranslation();
  const { logout } = useAuthStore(); 
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  const { t } = useTranslation();
  const handleLogout = () => {
    logout(); 
    navigate("/login"); 
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-200">
      {isSidebarOpen && <SideBar />}

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
                <option value="en">
                {t("English")}

                </option>
                <option value="es">{t("Spanish")}</option>
              </select>
            </div>
            <button
              onClick={handleLogout} 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              <FaSignInAlt />
              { t('Logout') } 
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