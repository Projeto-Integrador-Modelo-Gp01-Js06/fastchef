import Home from "./pages/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import Cardapio from "./pages/Cardapio";
 // Importando o componente de Serviços
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sobre from "../src/components/Sobre/Sobre";
import AppStore from "./components/AppStore/AppStore";
import Testimonial from "./components/Avaliacoes/Avaliacoes";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./pages/login/Login"; 
import Categories from "./pages/Categories"; 
import ComoFazerPedido from "./pages/ComoFazerPedido"; 
import ListarProdutos from "./components/produtos/listarprodutos/ListarProdutos";
import FormProduto from "./components/produtos/formproduto/FormProduto";
import DeletarProduto from "./components/produtos/deletarproduto/DeletarProduto";
import ListarProdutosSaudaveis from "./components/produtos/listarprodutossaudaveis/ListarProdutosSaudaveis";
import Servicos from "./components/Servicos/Servicos";
import Services from "./components/Servicos/Servicos";
import Navbar from "./components/navbar/Navbar";
 // Certifique-se de importar o AuthProvider
import { AuthProvider } from "./contexts/AuthContext";  // Certifique-se de importar o AuthProvider
import Perfil from "./pages/perfil/Perfil";
import { ToastContainer } from "react-toastify";

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
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>

          <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} /> {/* Renderizando a Home na rota principal */}
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/cardapio" element={<Cardapio />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/login" element={<Login />} />
              <Route path="/perfil" element={<Perfil />} />
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

        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
