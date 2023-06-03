import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { TasksColumn } from 'components/TasksCopmonents/TasksColumn/TasksColumn';
// 

const Layout = () => {
  return (
    <>
	 
      <Container>
        <h1>githack-GooseTrack</h1>
		  <TasksColumn/>
        <main>
          <Outlet />
			
        </main>
      </Container>
    </>
  );
};

export default Layout;
