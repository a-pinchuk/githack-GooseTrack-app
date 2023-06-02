import { useAuth } from 'hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = () => {
  const { isLoggedIn } = useAuth();
  console.log('Private route');

  return isLoggedIn ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};
