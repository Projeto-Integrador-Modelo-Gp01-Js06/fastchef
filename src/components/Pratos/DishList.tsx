import React from "react";
import ProductList from "../Cart/ProductList";

const DishList: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Pratos Disponíveis</h1>
      <ProductList />
    </div>
  );
};

export default DishList;
