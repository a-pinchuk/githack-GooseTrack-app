
import { Section, HomeLink } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <Section>
      <h1>404</h1>
      <h2>Looks like you're lost</h2>
      <p>The page you are looking for is not available!</p>
      <HomeLink to="/">Go to Home</HomeLink>
    </Section>
  );
};

export default NotFoundPage;
