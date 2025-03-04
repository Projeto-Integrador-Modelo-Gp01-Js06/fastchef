import React from "react";
import CartaoPrato from "../Pratos/CartaoPratos";

const produtos = [
  { id: 1, nome: "Pizza", preco: 25 },
  { id: 2, nome: "Hambúrguer", preco: 15 },
  { id: 3, nome: "Sushi", preco: 30 },
];

const ListaDeProdutos: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {produtos.map((prato) => (
        <CartaoPrato key={prato.id} prato={prato} /> // Passando 'prato' como nome da propriedade
      ))}
    </div>
  );
};

export default ListaDeProdutos;
