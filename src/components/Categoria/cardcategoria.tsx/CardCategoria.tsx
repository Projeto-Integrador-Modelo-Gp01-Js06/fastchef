import React from 'react'
import { FaInstagram } from 'react-icons/fa6'
import Categoria from '../../../models/Categoria'

interface CardCategoriasProps{
    categoria: Categoria
}

function CardCategoria({categoria}:CardCategoriasProps) { 
    return (
        <div className='border rounded-xl p-4 shadow-lg flex items-center justify-between bg-white hover:shadow-xl duration-300'>
    <FaInstagram className="text-4xl text-pink-500 hover:scale-110 duration-200 cursor-pointer ml-2" />
    <div className='text-2xl font-semibold text-gray-800'>{categoria.nome}</div>
</div>
    )
}

export default CardCategoria 