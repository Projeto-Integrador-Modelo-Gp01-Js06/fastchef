import React, { useContext, useEffect, useState } from 'react'
import CardCategoria from '../cardcategoria.tsx/CardCategoria'
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { ThreeDots } from 'react-loader-spinner';
import { listar } from '../../../services/service';
import Produto from '../../../models/Produto';

function ListarCategorias() {
  const navigate = useNavigate();

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const { id } = useParams<{ id: string }>()

    const [produtos, setProdutos] = useState<Produto[]>([])
    const [loadingProdutos, setLoadingProdutos] = useState(false)



    async function buscarCategorias() {
      try {
        console.log("Buscando categorias...");
        await listar("/categoria", setCategorias);
        console.log("Categorias encontradas:", categorias);
      } catch (err) {
        console.error("Erro ao buscar categorias:", err);
      }
    }
  useEffect(() => {
      buscarCategorias();
    }, [categorias.length]);


    async function buscarProdutos(id: string) {
      try {
          setLoadingProdutos(true)
          console.log(`Buscando produtos da categoria ${id}...`)
          await listar(`/categoria/${id}/produtos`, setProdutos)
          console.log("Produtos encontrados:", produtos)
      } catch (err) {
          console.error("Erro ao buscar produtos:", err)
      } finally {
          setLoadingProdutos(false)
      }
  }

  useEffect(() => {
    buscarCategorias()
}, [])
  return (
    <>
  
  <div className="flex justify-end">
    <button className="border-black border-2 rounded-lg p-1 bg-[#bad381] hover:text-white mt-3 -mb-3">
        EDITAR
    </button>
</div>
    <div className=" rounded-lg p-4 bg-[#fa7777] w-full my-4">
    <h2 className="text-3xl font-bold text-center text-white mb-6">CATEGORIAS</h2>
    <div className="flex justify-center items-center  ">
    {categorias.length === 0 && (

    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#bad381"
      radius="9"
      ariaLabel="three-dots-loading"
    />
  )}
  </div>


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {categorias.map((categoria) => (
                        <CardCategoria key={categoria.id} categoria={categoria} onClick={buscarProdutos} />
                      ))}



   </div>
   <div className="rounded-lg p-4 bg-[#fa7777] w-full my-4">
                    <h2 className="text-3xl font-bold text-center text-white mb-6">PRODUTOS</h2>
                    <div className="flex justify-center items-center">
                        {loadingProdutos && (
                            <ThreeDots
                                visible={true}
                                height="80"
                                width="80"
                                color="#bad381"
                                radius="9"
                                ariaLabel="three-dots-loading"
                            />
                        )}
                    </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {produtos.map((produto) => (
                            <div key={produto.id} className='border rounded-xl p-4 shadow-lg bg-white'>
                                <p className='text-2xl font-semibold text-gray-800'>{produto.nome}</p>
                            </div>
                        ))}
                    </div>
                </div>
         
   </>
  )
}

export default ListarCategorias