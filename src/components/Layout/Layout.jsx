import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Container>
        <h1>githack-GooseTrack</h1>

        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
};

export default Layout;
