import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import StoresPage from "../pages/Storespage";
import CartPage from "../pages/CartPage";
import Navbar from "../Navbar/Navbar";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stores" element={<StoresPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
