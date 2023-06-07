import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectUserToken } from 'redux/auth/selectors';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = () => {
  const userToken = useSelector(selectUserToken);
  console.log('Private route');

  return userToken ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};
