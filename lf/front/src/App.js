import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/layout.css";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import Contacto from "./pages/Contacto";
import Galeria from "./pages/Galeria";
import HomePage from "./pages/HomePage";
import Obras from "./pages/Obras";
import QuienesSomos from "./pages/QuienesSomos";
import Servicios from "./pages/Servicios";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/obras" element={<Obras />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />} />
          <Route path="/Servicios" element={<Servicios />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
