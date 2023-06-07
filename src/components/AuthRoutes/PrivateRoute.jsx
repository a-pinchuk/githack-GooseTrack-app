import { SideBar } from 'components/SideBar/SideBar';
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
    <div style={{ display: 'flex' }}>
      <SideBar></SideBar>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};
