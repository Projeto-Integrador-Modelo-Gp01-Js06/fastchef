import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { atualizar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function AtualizarPerfil() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { usuario, setUsuario } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'info');
            navigate('/');
        }
    }, [token])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario, // Mantém os dados do usuário
            [e.target.name]: e.target.value // Atualiza apenas o campo alterado
        });
    }

    async function atualizarFoto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)
        try {
            await atualizar(`/perfil`, usuario, setUsuario, {
                headers: {
                    Authorization: token,
                },
            });
            ToastAlerta('Foto de usuário atualizada com sucesso', 'sucesso')

        } catch (error: any) {
            ToastAlerta('Erro ao atualizar a foto', 'erro')
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">
                Editar Perfil
            </h1>

            <form className="flex flex-col w-1/2 gap-4" onSubmit={atualizarFoto}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Nova foto</label>
                    <input
                        type="text"
                        placeholder="URL da Foto"
                        name="foto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <button
                    type='submit'
                    className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>Atualizar</span>
                    }
                </button>
            </form>
        </div>
    );
}
export default AtualizarPerfil;