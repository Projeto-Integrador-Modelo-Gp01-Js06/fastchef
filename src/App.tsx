import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
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
import ListarProdutos from "./components/produtos/listarprodutos/ListarProdutos";
import FormProduto from "./components/produtos/formproduto/FormProduto";
import DeletarProduto from "./components/produtos/deletarproduto/DeletarProduto";
import ListarProdutosSaudaveis from "./components/produtos/listarprodutossaudaveis/ListarProdutosSaudaveis";
import Services from "./components/Services/Services";

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
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} /> {/* Renderizando a Home na rota principal */}
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/produtos" element={<ListarProdutos />} />
          <Route path="/cadatrarproduto" element={<FormProduto />} />
          <Route path="/atualizarproduto/:id" element={<FormProduto />} />
          <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
          <Route path="/produtossaudaveis" element={<ListarProdutosSaudaveis />} />
        </Routes>

        {/* Colocando o componente Services abaixo da Home */}
        <Services /> {/* Agora o componente Services será renderizado após a Home */}

        {/* Outras seções abaixo */}
        <Categories /> 
        <ComoFazerPedido />
        
        <Sobre />
        <AppStore />
        <Testimonial />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
