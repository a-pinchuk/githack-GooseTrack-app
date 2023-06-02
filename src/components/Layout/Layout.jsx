import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import UserForm from 'components/UserForm/UserForm';

const Layout = () => {
  return (
    <>
      <Container>
        <h1>githack-GooseTrack</h1>
        <main>
          <UserForm />
          <Outlet />
        </main>
      </Container>
    </>
  );
};

export default Layout;
