// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import jwtDecode from 'jwt-decode'; // Optional: decode JWT if used

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      try {
        // const decoded = jwtDecode(token); // Optional if you're using JWT
        setAdmin({ token }); // or {...decoded, token}
      } catch (err) {
        console.error("Invalid token", err);
        localStorage.removeItem('adminToken');
      }
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('adminToken', token);
    setAdmin({ token });
  };

  const logout = (redirect = true) => {
    localStorage.removeItem('adminToken');
    setAdmin(null);
    if (redirect) navigate('/adminlogin');
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
