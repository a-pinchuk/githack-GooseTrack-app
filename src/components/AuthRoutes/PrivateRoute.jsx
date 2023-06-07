import { SideBar } from 'components/SideBar/SideBar';
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
    <div style={{ display: 'flex' }}>
      <SideBar></SideBar>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};
