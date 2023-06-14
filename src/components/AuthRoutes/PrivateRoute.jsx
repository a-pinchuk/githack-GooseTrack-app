import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAccessToken } from 'redux/auth/selectors';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = () => {
  const userAccessToken = useSelector(selectAccessToken);

  return userAccessToken ? (
    <div style={{ display: 'flex' }}>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" replace />
  );
};
