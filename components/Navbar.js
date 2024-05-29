import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { isLoggedIn, logout } from '../utils/auth';

const Navbar = () => {
  const router = useRouter();
  const [isClientSide, setIsClientSide] = useState(false);

  useEffect(() => {
    setIsClientSide(true);
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <nav className="bg-black p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-red-600 text-3xl font-bold">Shwapno</a>
        </Link>
        <div>
          {isClientSide && isLoggedIn() ? (
            <>
              <Link href="/dashboard" legacyBehavior>
                <a className="text-white mx-4 hover:text-red-600 transition duration-300">Dashboard</a>
              </Link>
              <button onClick={handleLogout} className="text-white hover:text-red-600 transition duration-300">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" legacyBehavior>
                <a className="text-white mx-4 hover:text-red-600 transition duration-300">Login</a>
              </Link>
              <Link href="/register" legacyBehavior>
                <a className="text-white mx-4 hover:text-red-600 transition duration-300">Register</a>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
