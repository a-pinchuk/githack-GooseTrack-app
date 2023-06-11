import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectAccessToken } from 'redux/auth/selectors';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const PublicRoute = () => {
  const location = useLocation();
  const userAccessToken = useSelector(selectAccessToken);

  return !userAccessToken ? (
    <Outlet />
  ) : (
    <Navigate to={location?.state?.from ?? '/calendar'} replace />
  );
};
