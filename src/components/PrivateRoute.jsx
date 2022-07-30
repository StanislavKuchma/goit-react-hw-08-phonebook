// import { Children } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';

const PrivateRoute = ({ _, children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
export default PrivateRoute;
