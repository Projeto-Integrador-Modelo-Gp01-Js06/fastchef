import React from 'react'
import Categoria from '../../../models/Categoria'
import { Pencil, Trash } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

interface CardCategoriasProps {
    categoria: Categoria
    onClick: (id: string) => void
}

function CardCategoria({ categoria, onClick }: CardCategoriasProps) {
    return (
        <div onClick={() => onClick(categoria.id.toString())}     className="relative border rounded-xl p-4 shadow-3xl flex items-center justify-center bg-white hover:shadow-2xl duration-300 cursor-pointer">
            <p className='text-2xl font-semibold text-gray-800'>{categoria.nome}</p>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex">       
            <Link to={`/categoria/${categoria.id}`}>
              <Pencil size={24} className="mr-1 hover:fill-teal-700" />
            </Link>
            <Link to={`/categoria/${categoria.id}`}>
              <Trash size={24} className="mr-1 hover:fill-red-700" />
            </Link>
      </div>
      
        </div>
    )
}

export default CardCategoria