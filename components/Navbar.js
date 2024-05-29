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
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-white text-lg font-semibold">Home</a>
        </Link>
        <div>
          {isClientSide && isLoggedIn() ? (
            <>
              <Link href="/dashboard" legacyBehavior>
                <a className="text-white mx-2">Dashboard</a>
              </Link>
              <button onClick={handleLogout} className="text-white">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" legacyBehavior>
                <a className="text-white mx-2">Login</a>
              </Link>
              <Link href="/register" legacyBehavior>
                <a className="text-white mx-2">Register</a>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
