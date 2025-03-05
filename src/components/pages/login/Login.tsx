import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UsuarioLogin from "../../../models/UsuarioLogin";
import AuthContext from "../../../contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner";

const Login = () => {
  const navigate = useNavigate();
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
    usuario: "",
    senha: "",
  });

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (usuario.token !== "") 
      navigate("/home");
  }, [usuario]);

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
      {/* Coluna da imagem (oculta em telas menores) */}
      <div className="hidden lg:flex flex-col items-center justify-center h-full  p-10">
        <img
          src="https://ik.imagekit.io/c2hajdacu/FastChef/logo_fast_chef-removebg-preview.png?updatedAt=1741021601740"
          alt="Logo FastChef"
          className="max-w-xs mb-10"
        />
        <img
          src="https://ik.imagekit.io/c2hajdacu/FastChef/imagem_login-removebg-preview.png?updatedAt=1741058790785"
          alt="Login"
          className="max-w-xs"
        />
      </div>

      {/* Coluna do formulário */}
      <div className="w-full lg:w-1/2 p-1 my-10 mx-40 max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Faça seu login</h2>
        <form onSubmit={login} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Usuário</label>
            <input
              type="email"
              id="usuario"
              name="usuario"
              placeholder="Usuário (E-mail)"
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-[#8daf66]"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Senha</label>
            <input
              type="password"
              placeholder="Senha"
              id="senha"
              name="senha"
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-[#8daf66]"
              required
            />
          </div>

          <button
            type='submit'
            className="rounded bg-indigo-400 flex justify-center
            hover:bg-indigo-900 text-white w-1/2 py-2">
            {isLoading ?
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true} />
              :
              <span>Entrar</span>
            }
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Ainda não tem uma conta?{" "}
          <Link to="/cadastro" className="text-black font-semibold hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;