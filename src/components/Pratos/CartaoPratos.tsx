import React from "react";
import { useCarrinho } from "../contexts/CartContext";

interface Prato {
  id: number;
  nome: string;
  preco: number;
}

const CartaoPrato: React.FC<{ prato: Prato }> = ({ prato }) => {
  const { adicionarAoCarrinho } = useCarrinho();

  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-lg font-bold">{prato.nome}</h2>
      <p className="text-gray-600">R$ {prato.preco}</p>
      <button
        onClick={() => adicionarAoCarrinho({ ...prato, quantidade: 1 })}
        className="bg-blue-500 text-white px-3 py-1 rounded-md mt-2"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default CartaoPrato;
