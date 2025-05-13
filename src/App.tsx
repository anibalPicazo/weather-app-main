import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayOut from "./UI/layout/LayOut";
import ConctactPage from "./UI/pages/ContactPage";
import WeatherPage from "./UI/pages/WeatherPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="weather/:city" element={<WeatherPage />} />
          <Route path="contact" element={<ConctactPage />} />

          <Route index element={<div>Bienvenido a la app del clima</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;