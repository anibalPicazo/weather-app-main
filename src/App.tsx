import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayOut from "./UI/layout/LayOut";
import ContactPage from "./UI/pages/ContactPage";
import LoginPage from "./UI/pages/LoginPage";
import WeatherPage from "./UI/pages/WeatherPage";
import ProtectedRoute from "./routes/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <LayOut />
            </ProtectedRoute>
          }
        >
          <Route path="weather/:city" element={<WeatherPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route index element={<div>Bienvenido a la app del clima</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;