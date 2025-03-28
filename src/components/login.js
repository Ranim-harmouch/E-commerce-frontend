import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await login(email, password);
      if (data.token) {
        localStorage.setItem('authToken', data.token);
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-sm p-8">
        <h2 className="text-2xl font-semibold mb-6">
          Log in to <span className="font-bold">PowerTech</span>
        </h2>
        <p className=" text-gray-600 mb-6">Enter your details below</p>

        {error && <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-center">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border-b border-gray-400 focus:outline-none text-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border-b border-gray-400 focus:outline-none text-gray-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-40 bg-red-500 text-white py-3 rounded mt-4 font-medium"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <div className="text-right mt-3">
          <a href="#" className="text-red-500 text-sm">Forget Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
