import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Cadastro() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

<<<<<<< HEAD
=======
  // A interface 'Usuario' agora exige a propriedade 'admin', então incluímos ela com um valor padrão
>>>>>>> debfa186a8f869fa8e5ff38d9a24e36712c0f2b4
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
<<<<<<< HEAD
    admin: false
=======
    admin: false, // A propriedade 'admin' agora está sendo inicializada corretamente
>>>>>>> debfa186a8f869fa8e5ff38d9a24e36712c0f2b4
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate("/login");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  }

  function handleConfirmaSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

<<<<<<< HEAD
    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        ToastAlerta("Usuário cadastrado com sucesso!", "sucesso");
=======
    // Verificar se a senha e a confirmação estão corretas
    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);
      try {
        // Passando a propriedade 'admin' (que está como false por padrão) junto aos dados
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        ToastAlerta("Usuário cadastrado com sucesso!", "sucesso");
        navigate("/login"); // Após cadastro, redireciona para a tela de login
>>>>>>> debfa186a8f869fa8e5ff38d9a24e36712c0f2b4
      } catch (error) {
        ToastAlerta("Erro ao cadastrar o usuário!", "erro");
      }
    } else {
      ToastAlerta("Dados estão inconsistentes! Verifique os dados.", "erro");
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }
    setIsLoading(false);
  }

  return (
<<<<<<< HEAD
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Cadastro</h2>

        <form className="space-y-4" onSubmit={cadastrarNovoUsuario}>
          <div>
            <label htmlFor="nome" className="block text-gray-700">Nome</label>
=======
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="w-full max-w-md bg-red-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-black dark:text-gray-100">Cadastro</h2>

        <form className="space-y-1" onSubmit={cadastrarNovoUsuario}>
          <div>
            <label htmlFor="nome" className="block m-15 text-gray-700 dark:text-gray-300 px-1">Nome</label>
>>>>>>> debfa186a8f869fa8e5ff38d9a24e36712c0f2b4
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
<<<<<<< HEAD
              className="w-full border rounded-lg px-4 py-2"
=======
              className="w-full border-black border rounded-lg py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-1"
>>>>>>> debfa186a8f869fa8e5ff38d9a24e36712c0f2b4
              value={usuario.nome}
              onChange={atualizarEstado}
            />
          </div>

          <div>
<<<<<<< HEAD
            <label htmlFor="usuario" className="block text-gray-700">Email</label>
=======
            <label htmlFor="usuario" className="block text-gray-700 dark:text-gray-300 px-1">Email</label>
>>>>>>> debfa186a8f869fa8e5ff38d9a24e36712c0f2b4
            <input
              type="email"
              id="usuario"
              name="usuario"
              placeholder="Email"
<<<<<<< HEAD
              className="w-full border rounded-lg px-4 py-2"
=======
              className="w-full border border-black  rounded-lg py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-1"
>>>>>>> debfa186a8f869fa8e5ff38d9a24e36712c0f2b4
              value={usuario.usuario}
              onChange={atualizarEstado}
            />
          </div>

          <div>
<<<<<<< HEAD
            <label htmlFor="foto" className="block text-gray-700">Foto</label>
=======
            <label htmlFor="foto" className="block text-gray-700 dark:text-gray-300 px-1">Foto</label>
>>>>>>> debfa186a8f869fa8e5ff38d9a24e36712c0f2b4
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
<<<<<<< HEAD
              className="w-full border rounded-lg px-4 py-2"
=======
              className="w-full border border-black  rounded-lg py-2 px-1 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
>>>>>>> debfa186a8f869fa8e5ff38d9a24e36712c0f2b4
              value={usuario.foto}
              onChange={atualizarEstado}
            />
          </div>

          <div>
<<<<<<< HEAD
            <label htmlFor="senha" className="block text-gray-700">Senha</label>
=======
            <label htmlFor="senha" className="block text-gray-700 dark:text-gray-300 px-1">Senha</label>
>>>>>>> debfa186a8f869fa8e5ff38d9a24e36712c0f2b4
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
<<<<<<< HEAD
              className="w-full border rounded-lg px-4 py-2"
=======
              className="w-full border px-1 border-black  rounded-lg py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
>>>>>>> debfa186a8f869fa8e5ff38d9a24e36712c0f2b4
              value={usuario.senha}
              onChange={atualizarEstado}
            />
          </div>

          <div>
<<<<<<< HEAD
            <label htmlFor="confirmarSenha" className="block text-gray-700">Confirmar Senha</label>
=======
            <label htmlFor="confirmarSenha" className="block text-gray-700  dark:text-gray-300 px-1">Confirmar Senha</label>
>>>>>>> debfa186a8f869fa8e5ff38d9a24e36712c0f2b4
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar a senha"
<<<<<<< HEAD
              className="w-full border rounded-lg px-4 py-2"
=======
              className="w-full border border-black  rounded-lg py-2 px-1 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
>>>>>>> debfa186a8f869fa8e5ff38d9a24e36712c0f2b4
              value={confirmaSenha}
              onChange={handleConfirmaSenha}
            />
          </div>

          <div className="flex justify-between mt-4">
            <button
              type="submit"
<<<<<<< HEAD
              className="bg-[#8daf66] hover:bg-lime-400 px-6 py-2 rounded-full text-black w-1/2 mr-2"
=======
              className="bg-[#8daf66] hover:bg-lime-400 px-6 py-2 rounded-lg text-black w-1/2 mr-2"
>>>>>>> debfa186a8f869fa8e5ff38d9a24e36712c0f2b4
            >
              {isLoading ? (
                <RotatingLines strokeColor="black" width="24" visible={true} />
              ) : (
                "Cadastrar"
              )}
            </button>
            <button
              type="button"
<<<<<<< HEAD
              className="bg-[#fa7777] hover:bg-[#e66a6a]  px-6 py-2 rounded-full text-black w-1/2 ml-2"
              onClick={retornar}
            >
              Voltar tela inicial
            </button>
          </div>
        </form>
        <p className="text-center text-sm mt-4">
          Já tem uma conta? Faça o {" "}
          <Link to="/login" className="text-black font-semibold hover:underline hover:text-[#8daf66]">
            Login
          </Link>
        </p>
=======
              className="bg-[#fa7777] hover:bg-[#e66a6a] px-6 py-2 rounded-lg text-black w-1/2 ml-2"
            >
              <Link to="/">
                Voltar tela inicial</Link>
            </button>
          </div>
          <p className="text-center mt-4">
            Já tem uma conta? Faça o {" "}
            <Link to="/login" className="text-[#627947]  hover:underline">
              Login
            </Link>
          </p>
        </form>
>>>>>>> debfa186a8f869fa8e5ff38d9a24e36712c0f2b4
      </div>
    </div>
  );
}

export default Cadastro;
