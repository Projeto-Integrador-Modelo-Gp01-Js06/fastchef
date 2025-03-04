import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import Cadastro from "./components/pages/Cadastro";
import Cardapio from "./components/pages/Cardapio";
import Carrinho from "./components/Cart/Cart";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import AppStore from "./components/AppStore/AppStore";
import Testimonial from "./components/Avaliacoes/Avaliacoes";
import Footer from "./components/Footer/Footer";
import { ProvedorCarrinho } from "./components/contexts/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <ProvedorCarrinho>
      <Router>
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Banner />
          <AppStore />
          <Testimonial />
          <Footer />
        </div>
      </Router>
    </ProvedorCarrinho>
  );
};

export default App;