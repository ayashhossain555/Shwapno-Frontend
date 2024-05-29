import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import { isLoggedIn, logout } from '../utils/auth';

const Dashboard = () => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = isLoggedIn();
      console.log("Is Logged In:", loggedIn); // Debugging log
      if (!loggedIn) {
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
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p>Welcome to the user dashboard!</p>
      </div>
    </>
  );
};

export default Dashboard;
