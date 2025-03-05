import React, { useContext, useEffect, useState } from 'react'
import CardCategoria from '../cardcategoria.tsx/CardCategoria'
import { useNavigate } from 'react-router-dom';
import { buscar } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import { ThreeDots } from 'react-loader-spinner';

function ListarCategorias() {
  const navigate = useNavigate();

    const [categorias, setCategorias] = useState<Categoria[]>([])

    

    async function buscarCategorias() {
      try {
        await buscar("/categorias", setCategorias);
      } catch (err) {
        console.log(console.error(err));
      }
    }
  useEffect(() => {
      buscarCategorias();
    }, [categorias.length]);

  return (
    <>

    <div className=" rounded-lg p-4 bg-blue-400 w-full my-4">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Categorias</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      
    {categorias.length === 0 && (
    
    <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#fa7777"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  
    />
      )}

    {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}



   </div>
   </div>
   </>
  )
}

export default ListarCategorias