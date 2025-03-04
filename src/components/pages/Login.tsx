import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://fastchef-backend.onrender.com';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const endpoint = isRegistering ? '/usuarios/cadastro' : '/usuarios/login';
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (response.ok) {
      alert(isRegistering ? 'Cadastro realizado!' : 'Login bem-sucedido!');
      navigate('/');
    } else {
      alert(data.message || 'Erro ao processar a solicitação');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-950 dark:text-white">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isRegistering ? 'Cadastro' : 'Login'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-400 to-red-300 hover:scale-105 duration-200 text-white py-3 rounded-full mt-4 font-bold"
          >
            {isRegistering ? 'Cadastrar' : 'Entrar'}
          </button>
        </form>
        <button
          onClick={() => setIsRegistering(!isRegistering)}
          className="text-blue-500 mt-4 w-full py-2 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-200"
        >
          {isRegistering ? 'Já tem uma conta? Faça login' : 'Não tem conta? Cadastre-se'}
        </button>
      </div>
    </div>
  );
};

export default Login;
