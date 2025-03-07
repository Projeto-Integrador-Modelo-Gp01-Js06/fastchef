import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";
<<<<<<< HEAD

import { RotatingLines } from "react-loader-spinner";
import { atualizar } from "../../../services/Service";
=======
import { atualizar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import Usuario from "../../../models/Usuario";
>>>>>>> debfa186a8f869fa8e5ff38d9a24e36712c0f2b4

function AtualizarPerfil() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
<<<<<<< HEAD
=======
    const [confirmarSenha, setConfirmarSenha] = useState<string>("")
>>>>>>> debfa186a8f869fa8e5ff38d9a24e36712c0f2b4

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

<<<<<<< HEAD
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
=======
    async function atualizarUsuario(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (usuario.senha && usuario.senha.length >= 8) {
            setIsLoading(true)
            try {
                await atualizar(`/usuarios/atualizar`, usuario, setUsuario, {
                    headers: {
                        Authorization: token,
                    },
                });
                ToastAlerta("Usuário atualizado com sucesso!", "sucesso");

            } catch (error: any) {
                ToastAlerta("Erro ao atualizar o usuário!", "erro");
            }
        } else {
            ToastAlerta("Dados estão inconsistentes! Verifique os dados.", "erro");
            setUsuario({ ...usuario, senha: "" });
        }
        setIsLoading(false)
>>>>>>> debfa186a8f869fa8e5ff38d9a24e36712c0f2b4
    }

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">
                Editar Perfil
            </h1>

<<<<<<< HEAD
            <form className="flex flex-col w-1/2 gap-4" onSubmit={atualizarFoto}>
=======
            <form className="flex flex-col w-1/2 gap-4" onSubmit={atualizarUsuario}>
                <div>
                    <label htmlFor="nome" >Nome</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Nome"
                        className="w-full border border-black  rounded-lg py-2 dark:border-gray-600 px-2"
                        value={usuario.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div>
                    <label htmlFor="usuario" >Email</label>
                    <input
                        type="email"
                        id="usuario"
                        name="usuario"
                        placeholder="Email"
                        className="w-full border border-black  rounded-lg py-2 dark:border-gray-600 px-2"
                        value={usuario.usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
>>>>>>> debfa186a8f869fa8e5ff38d9a24e36712c0f2b4
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Nova foto</label>
                    <input
                        type="text"
                        placeholder="URL da Foto"
                        name="foto"
                        required
<<<<<<< HEAD
                        className="border-2 border-slate-700 rounded p-2"
=======
                        className="w-full border border-black  rounded-lg py-2 dark:border-gray-600 px-2"
>>>>>>> debfa186a8f869fa8e5ff38d9a24e36712c0f2b4
                        value={usuario.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
<<<<<<< HEAD
=======
                <div>
                    <label htmlFor="senha" >Senha</label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Senha"
                        className="w-full border border-black  rounded-lg py-2 dark:border-gray-600 px-2"
                        value={usuario.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
>>>>>>> debfa186a8f869fa8e5ff38d9a24e36712c0f2b4

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