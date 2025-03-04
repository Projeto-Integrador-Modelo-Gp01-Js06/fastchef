import React from "react";
import { useCarrinho } from "../contexts/CartContext";

const PaginaCarrinho: React.FC = () => {
  const { carrinho, removerDoCarrinho, limparCarrinho } = useCarrinho();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Seu Carrinho</h1>
      {carrinho.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div>
          {carrinho.map((item) => (
            <div key={item.id} className="border p-2 my-2 flex justify-between">
              <span>{item.nome} - R$ {item.preco} x {item.quantidade}</span>
              <button
                onClick={() => removerDoCarrinho(item.id)}
                className="text-red-500"
              >
                Remover
              </button>
            </div>
          ))}
          <button onClick={limparCarrinho} className="bg-red-500 text-white px-3 py-1 mt-4">
            Esvaziar Carrinho
          </button>
        </div>
      )}
    </div>
  );
};

export default PaginaCarrinho;
