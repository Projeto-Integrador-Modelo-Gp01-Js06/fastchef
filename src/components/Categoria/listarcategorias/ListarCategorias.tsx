import React from 'react'
import CardCategoria from '../cardcategoria.tsx/CardCategoria'

function ListarCategorias() {
  return (
    <div className=" p-4 bg-red-400 w-full my-4">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Categorias</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      
<CardCategoria/>
<CardCategoria/>
<CardCategoria/>
<CardCategoria/>
<CardCategoria/>
<CardCategoria/>


   </div>
   </div>
   
  )
}

export default ListarCategorias