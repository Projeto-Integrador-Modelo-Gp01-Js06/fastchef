import React, { useContext, useEffect, useState } from 'react'
import CardCategoria from '../cardcategoria.tsx/CardCategoria'
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { ThreeDots } from 'react-loader-spinner';
import Produto from '../../../models/Produto';
import { listar } from '../../../services/Service';
import CardProdutos from '../../produtos/cardprodutos/CardProdutos';

function ListarCategorias() {
  const navigate = useNavigate();
  // const { usuario } = useContext(AuthContext) // Verifique se o usuário é administrador


    // const { id } = useParams<{ id: string }>()

    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [produtos, setProdutos] = useState<Produto[]>([])
    const [loadingProdutos, setLoadingProdutos] = useState(false)



  //   async function buscarCategorias() {
  //     try {
  //       console.log("Buscando categorias...");
  //       await listar("/categoria", setCategorias);
  //       console.log("Categorias encontradas:", categorias);
  //     } catch (err) {
  //       console.error("Erro ao buscar categorias:", err);
  //     }
  //   }
  // useEffect(() => {
  //     buscarCategorias();
  //   }, [categorias.length]);

    async function buscarCategorias() {
      try {
        console.log("Buscando categorias...")
        const categoriasResponse = await listar("/categoria", setCategorias)
        console.log("Categorias encontradas:", categoriasResponse)
        // Extrair produtos das categorias
        const todosProdutos = categoriasResponse.flatMap((categoria: Categoria) => categoria.produto)
        setProdutos(todosProdutos)
        console.log("Produtos encontrados:", todosProdutos)
      } catch (err) {
        console.error("Erro ao buscar categorias:", err)
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
    <div className="rounded-lg p-4 bg-[#fa7777] w-full my-4">
    <h2 className="text-3xl font-bold text-center text-white mb-6">CATEGORIAS</h2>
    <div className="flex justify-center items-center">
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
            <CardCategoria key={categoria.id} categoria={categoria} onClick={() => setProdutos(categoria.produto || [])} />
          ))}
        </div>
   <div className="rounded-lg p-4 bg-[#fa7777] w-full my-4">
                    <h2 className="text-3xl font-bold text-center text-white mb-6"></h2>
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
              <CardProdutos key={produto.id} produto={produto} />
            ))}
          </div>
                </div>
         
   </>
  )
}

export default ListarCategorias