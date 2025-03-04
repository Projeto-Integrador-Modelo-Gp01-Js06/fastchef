import React from "react";
import StoreList from "../Stores/StoreList";

const StoresPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Lojas Parceiras</h1>
      <StoreList />
    </div>
  );
};

export default StoresPage;
