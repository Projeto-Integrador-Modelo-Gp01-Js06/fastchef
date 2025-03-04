const stores = [
  { id: 1, name: "Pizzaria Saborosa", location: "Centro" },
  { id: 2, name: "Hamburgueria Top", location: "Zona Sul" },
  { id: 3, name: "Saladeria Fresh", location: "Zona Norte" },
];

const Stores = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Lojas</h2>
      <ul>
        {stores.map((store) => (
          <li key={store.id} className="p-2 border-b">
            {store.name} - {store.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stores;
