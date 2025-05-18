// src/components/ProtectedRoute.js
import { useAuth } from '../context/AuthProvider';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { admin } = useAuth();

  if (!admin) {
    return <Navigate to="/adminlogin" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
