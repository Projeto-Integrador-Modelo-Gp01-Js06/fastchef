import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Cardapio from "./pages/Cardapio";
 // Importando o componente de Serviços
import Sobre from "../src/components/Sobre/Sobre";
import AppStore from "./components/AppStore/AppStore";
import Testimonial from "./components/Avaliacoes/Avaliacoes";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./pages/Login"; 
import Categories from "./pages/Categories"; 
import ComoFazerPedido from "./pages/ComoFazerPedido"; 
import Servicos from "./components/Servicos/Servicos";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar/Navbar";

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
    <AuthProvider> {/* Envolva a aplicação com o AuthProvider */}
      <Router>
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} /> {/* Renderizando a Home na rota principal */}
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route 
            path="/login" 
            element={
              <AuthProvider> {/* Envolvendo apenas as páginas que precisam do AuthContext */}
                <Login />
              </AuthProvider>
            } 
          />
          </Routes>

          {/* Colocando o componente Services abaixo da Home */}
          <Servicos /> {/* Agora o componente Services será renderizado após a Home */}

          {/* Outras seções abaixo */}
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