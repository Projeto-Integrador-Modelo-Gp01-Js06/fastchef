import React from "react";
import StoreCard from "./StoreCard";

const stores = [
  { id: 1, name: "Pizza Express" },
  { id: 2, name: "Hamburgueria Gourmet" },
  { id: 3, name: "Sushi House" },
];

const StoreList: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {stores.map((store) => (
        <StoreCard key={store.id} store={store} />
      ))}
    </div>
  );
};

export default StoreList;
