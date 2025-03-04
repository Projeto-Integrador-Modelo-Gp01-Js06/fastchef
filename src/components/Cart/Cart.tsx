import { useCarrinho } from "../contexts/CartContext"; // Corrigido para o nome certo do hook

const Carrinho = () => { // Alterei o nome do componente para 'Carrinho', já que estamos usando o português
  const { carrinho, removerDoCarrinho } = useCarrinho(); // Usando o hook 'useCarrinho'

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Carrinho</h2>
      {carrinho.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {carrinho.map((item) => (
            <li key={item.id} className="flex justify-between p-2 border-b">
              <span>{item.nome} - R$ {item.preco},00 (x{item.quantidade})</span>
              <button
                onClick={() => removerDoCarrinho(item.id)}
                className="text-red-500"
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carrinho;
