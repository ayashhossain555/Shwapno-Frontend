import { useState } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { login, getUserRole } from '../utils/auth';
import Navbar from '../components/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      console.log("Login successful", response); // Debugging log
      const role = getUserRole();
      console.log("User role:", role); // Debugging log
      if (role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/dashboard');
      }
    } catch (error) {
      console.error("Login error:", error); // Debugging log
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid email or password',
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white p-2 rounded-lg mt-4 hover:bg-red-700 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
