import { useTranslation } from 'react-i18next';
import { Section, HomeLink } from './NotFoundPage.styled';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <h1>404</h1>
      <h2>{t('notFound.fact')}</h2>
      <p>{t('notFound.information')}</p>
      <HomeLink to="/">{t('notFound.return')}</HomeLink>
    </Section>
  );
};

export default NotFoundPage;
