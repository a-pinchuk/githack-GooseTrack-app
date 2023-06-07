import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectUserToken } from 'redux/auth/selectors';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const PublicRoute = () => {
  const location = useLocation();
  const userToken = useSelector(selectUserToken);
  console.log('Public route');

  return !userToken ? (
    <Outlet />
  ) : (
    <Navigate to={location?.state?.from ?? '/calendar'} replace />
  );
};
