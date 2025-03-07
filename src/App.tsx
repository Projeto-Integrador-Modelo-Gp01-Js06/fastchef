import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "./pages/Home";
// Importando o componente de Serviços
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
import Navbar from "./components/Navbar/Navbar";
import Cadastro from "./pages/cadastro/Cadastro";
import Cardapio from "./pages/Cardapio";
import Login from "./pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Cart from "./components/carrinho/cart/Cart";
import { CartProvider } from "./contexts/CartContext";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import DeletarCategoria from "./components/Categoria/deletarcategoria/DeletarCategoria";
import CadastrarCategoria from "./components/Categoria/cadastrarcategoria/CadastrarCategoria";
import EditarCategoria from "./components/Categoria/editarcategoria/EditarCategoria";

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
            <CartProvider>

                <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
                  <Navbar />

                  <Routes>
                    <Route path="/" element={<Home />} /> {/* Renderizando a Home na rota principal */}
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/cardapio" element={<Cardapio />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/" element={<Home />} /> {/* Renderizando a Home na rota principal */}
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/cardapio" element={<Cardapio />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/categoria/novo" element={<CadastrarCategoria />} />
                    <Route path="/categoria/:id" element={<EditarCategoria />} />
                    <Route path="/categoria/deletar/:id" element={<DeletarCategoria />} />

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

            </CartProvider>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </>

  );
};

export default App;