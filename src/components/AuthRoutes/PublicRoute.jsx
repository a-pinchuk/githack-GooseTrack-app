// import { useAuth } from '../../hooks/useAuth';
import { useAuth } from 'hooks/useAuth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const PublicRoute = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  console.log('Public route');

  return !isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={location?.state?.from ?? '/calendar'} replace />
  );
};
