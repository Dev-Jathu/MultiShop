import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../context/authContext.js';

const ProtectedRoute = ({ children, allowRoles }) => {
  const { token, role } = useContext(authContext);

  if (!token) {
    return (
      <Navigate
        to='/login'
        replace
      />
    );
  }

  if (!allowRoles.includes(role)) {
    toast.error("You don't have permission to access this page");
    return (
      <Navigate
        to='/login'
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;
