import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { EyeSlash, Eye } from "@phosphor-icons/react";
import UsuarioLogin from "../../models/UsuarioLogin";
import AuthContext from "../../contexts/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
    usuario: "",
    senha: "",
  });

  const [mostrarSenha, setMostrarSenha] = useState(false);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  useEffect(() => {
    if (usuario.token !== "") navigate("/");
  }, [usuario, navigate]);

  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  function toggleSenha() {
    setMostrarSenha(!mostrarSenha);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
      {/* Coluna da imagem (oculta em telas menores) */}
      <div className="hidden lg:flex flex-col items-center justify-center h-full p-10">
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
              onChange={atualizarEstado}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-[#8daf66]"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Senha</label>
            <div className="relative">
              <input
                type={mostrarSenha ? "text" : "password"}
                placeholder="Senha"
                id="senha"
                name="senha"
                value={usuarioLogin.senha}
                onChange={atualizarEstado}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-[#8daf66]"
                required
              />
              <button
                type="button"
                onClick={toggleSenha}
                className="absolute right-3 top-3"
              >
                {mostrarSenha ? <EyeSlash size={24} /> : <Eye size={24} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="my-5 w-full bg-[#fa7777] text-white px-6 py-2 rounded-lg hover:bg-[#e66a6a] transition"
          >
            <div className="flex items-center justify-center">
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                <span>Entrar</span>
              )}
            </div>
          </button>

          <hr className="border-slate-800 w-full" />

          <p className="text-center mt-4">
            Ainda não tem uma conta?{" "}
            <Link to="/cadastro" className="text-[#627947] hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
