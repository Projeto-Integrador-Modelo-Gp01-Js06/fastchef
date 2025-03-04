import React from "react";

interface Store {
  id: number;
  name: string;
}

const StoreCard: React.FC<{ store: Store }> = ({ store }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-lg font-bold">{store.name}</h2>
      <button className="bg-blue-500 text-white px-3 py-1 rounded-md mt-2">
        Ver Pratos
      </button>
    </div>
  );
};

export default StoreCard;
