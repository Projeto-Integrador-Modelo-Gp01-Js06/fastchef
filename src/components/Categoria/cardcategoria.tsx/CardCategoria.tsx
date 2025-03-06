import React from 'react'
import Categoria from '../../../models/Categoria'

interface CardCategoriasProps {
    categoria: Categoria
    onClick: (id: string) => void
}

function CardCategoria({ categoria, onClick }: CardCategoriasProps) {
    return (
        <div onClick={() => onClick(categoria.id.toString())} className='border rounded-xl p-4 shadow-lg flex items-center justify-center bg-white hover:shadow-xl duration-300 cursor-pointer'>
            <p className='text-2xl font-semibold text-gray-800'>{categoria.nome}</p>
        </div>
    )
}

export default CardCategoria