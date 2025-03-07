import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Sobre from "../src/components/Sobre/Sobre";
import AppStore from "./components/AppStore/AppStore";
import Testimonial from "./components/Avaliacoes/Avaliacoes";
import Cart from "./components/carrinho/cart/Cart";
import Footer from "./components/Footer/Footer";
import Servicos from "./components/Servicos/Servicos";
import { AuthProvider } from "./contexts/AuthContext"; // 
import { CartProvider } from "./contexts/CartContext";
import Cadastro from "./pages/cadastro/Cadastro";
import Cardapio from "./pages/Cardapio";
import Categories from "./pages/Categories";
import ComoFazerPedido from "./pages/ComoFazerPedido";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Perfil from "./pages/perfil/Perfil";
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
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>

          <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
            <CartProvider>
              <Navbar/>
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
              </CartProvider>
          </div>

    </BrowserRouter >
      </AuthProvider >
    </>

  );
};

export default App;