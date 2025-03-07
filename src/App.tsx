<<<<<<<<< Temporary merge branch 1
<<<<<<<<< Temporary merge branch 1
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from "react-router-dom";
=========
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/DarkMode"
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Cardapio from "./pages/Cardapio";
 // Importando o componente de Serviços
>>>>>>>>> Temporary merge branch 2
=========
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Cardapio from "./pages/Cardapio";
>>>>>>>>> Temporary merge branch 2
import Sobre from "../src/components/Sobre/Sobre";
import AppStore from "./components/AppStore/AppStore";
import Testimonial from "./components/Avaliacoes/Avaliacoes";
import Footer from "./components/Footer/Footer";
import "aos/dist/aos.css";
import Categories from "./pages/Categories";
import ComoFazerPedido from "./pages/ComoFazerPedido";
import Servicos from "./components/Servicos/Servicos";
<<<<<<<<< Temporary merge branch 1
<<<<<<<<< Temporary merge branch 1
import { AuthProvider } from "./contexts/AuthContext";  // Certifique-se de importar o AuthProvider
import Perfil from "./components/pages/perfil/Perfil";
import { ToastContainer } from "react-toastify";
=========
import Services from "./components/Servicos/Servicos";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
 // Certifique-se de importar o AuthProvider
>>>>>>>>> Temporary merge branch 2
=========
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar/Navbar";

// Componente para rolar ao topo em cada mudança de rota
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Rolagem suave
    });
  }, [pathname]); // Executa toda vez que a rota muda

  return null;
}

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <AuthProvider>
>>>>>>>>> Temporary merge branch 2
      <Router>
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
          <ScrollToTop /> {/* Adiciona o ScrollToTop aqui */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
              <Route path="/equipe" element={<Equipe />} />
              <Route path="/perfil" element={<Perfil />} />
            <Route
              path="/login"
              element={
                <AuthProvider>
                  <Login />
                </AuthProvider>
              }
            />
          </Routes>

          {/* Componentes renderizados após a rota */}
          <Servicos />
          <Categories />
          <ComoFazerPedido />
          <Sobre />
          <AppStore />
          <Testimonial />
          <Equipe/>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;