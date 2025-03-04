import { useCarrinho } from "../contexts/CartContext";

// Definindo o tipo 'item' como 'ItemDoCarrinho'
const itensDoCardapio = [
  { id: 1, nome: "Pizza", preco: 30 },
  { id: 2, nome: "Hambúrguer", preco: 25 },
  { id: 3, nome: "Salada", preco: 20 },
];

const Cardapio: React.FC = () => {
  const { adicionarAoCarrinho } = useCarrinho();

  // Definindo o tipo 'item' como 'ItemDoCarrinho'
  const aoAdicionarAoCarrinho = (item: { id: number; nome: string; preco: number }) => {
    const itemComQuantidade = { ...item, quantidade: 1 };  // Adicionando o campo 'quantidade'
    adicionarAoCarrinho(itemComQuantidade);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Cardápio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {itensDoCardapio.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">{item.nome}</h3>
            <p className="text-gray-600">R$ {item.preco},00</p>
            <button
              onClick={() => aoAdicionarAoCarrinho(item)} // Chamando a função que adiciona o 'quantidade'
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardapio;
