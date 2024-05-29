import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import { isLoggedIn, logout, getUserRole } from '../utils/auth';

const Admin = () => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = isLoggedIn();
      const role = getUserRole();
      console.log("Is Logged In:", loggedIn); // Debugging log
      console.log("User role:", role); // Debugging log
      if (!loggedIn || role !== 'admin') {
        router.push('/login');
      } else {
        setAuthenticated(true);
      }
      setLoading(false);
    };
    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        <p>Welcome to the admin panel!</p>
      </div>
    </>
  );
};

export default Admin;
