import { useState } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { register } from '../utils/auth';
import Navbar from '../components/Navbar';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ name, email, password, role });
      Swal.fire('Success', 'Account created successfully', 'success').then(() => {
        router.push('/login');
      });
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Something went wrong', 'error');
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border-t-8 border-red-600">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Role</label>
              <select
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white p-2 rounded-lg mt-4 hover:bg-red-600 transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
