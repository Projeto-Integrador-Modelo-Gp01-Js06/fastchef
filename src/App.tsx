import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "../src/components/Sobre/Sobre";
import AppStore from "./components/AppStore/AppStore";
import Testimonial from "./components/Avaliacoes/Avaliacoes";
import Footer from "./components/Footer/Footer";
import "aos/dist/aos.css";
import Categories from "./pages/Categories";
import ComoFazerPedido from "./pages/ComoFazerPedido";
import Servicos from "./components/Servicos/Servicos";
import Perfil from "./pages/perfil/Perfil";
import { ToastContainer } from "react-toastify";
import Cardapio from "./pages/Cardapio";
import Login from "./pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar/Navbar";
import Cadastro from "./pages/cadastro/Cadastro";

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
      <Router>
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
          <ScrollToTop /> {/* Adiciona o ScrollToTop aqui */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/sobre" element={<Sobre />} />
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
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;