import React, { createContext, useContext, useState } from "react";

interface ItemCarrinho {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

interface ContextoCarrinhoTipo {
  carrinho: ItemCarrinho[];
  adicionarAoCarrinho: (item: ItemCarrinho) => void;
  removerDoCarrinho: (id: number) => void;
  limparCarrinho: () => void;
}

const ContextoCarrinho = createContext<ContextoCarrinhoTipo | undefined>(undefined);

export const ProvedorCarrinho: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);

  // Adiciona item ao carrinho, aumentando a quantidade se já existir
  const adicionarAoCarrinho = (novoItem: ItemCarrinho) => {
    setCarrinho((prev) => {
      const itemExistente = prev.find((item) => item.id === novoItem.id);

      if (itemExistente) {
        return prev.map((item) =>
          item.id === novoItem.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...prev, { ...novoItem, quantidade: 1 }];
      }
    });
  };

  // Remove um item do carrinho ou diminui a quantidade se for maior que 1
  const removerDoCarrinho = (id: number) => {
    setCarrinho((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  };

  // Esvazia o carrinho completamente
  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <ContextoCarrinho.Provider value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho, limparCarrinho }}>
      {children}
    </ContextoCarrinho.Provider>
  );
};

export const useCarrinho = () => {
  const contexto = useContext(ContextoCarrinho);
  if (!contexto) throw new Error("useCarrinho deve ser usado dentro de um ProvedorCarrinho");
  return contexto;
};
