import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const isClient = typeof window !== 'undefined';

export const register = async (userData) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/register`,
    userData
  );
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/login`,
    userData
  );
  if (isClient) {
    const token = response.data.token;
    localStorage.setItem('token', token);
    const decoded = jwtDecode(token);
    localStorage.setItem('role', decoded.role); // Store the role in local storage
    console.log("Token stored:", token); // Debugging log
    console.log("Role stored:", decoded.role); // Debugging log
  }
  return response.data;
};

export const isLoggedIn = () => {
  if (!isClient) return false;
  const token = localStorage.getItem('token');
  if (!token) return false;
  try {
    const decoded = jwtDecode(token);
    console.log("Decoded token:", decoded); // Debugging log
    const isExpired = decoded.exp * 1000 < Date.now();
    if (isExpired) {
      console.log("Token expired"); // Debugging log
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      return false;
    }
    return true;
  } catch (error) {
    console.error("Token decoding error:", error); // Debugging log
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    return false;
  }
};

export const logout = () => {
  if (isClient) {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
};

export const getToken = () => {
  if (!isClient) return null;
  return localStorage.getItem('token');
};

export const getUserRole = () => {
  if (!isClient) return null;
  return localStorage.getItem('role');
};
