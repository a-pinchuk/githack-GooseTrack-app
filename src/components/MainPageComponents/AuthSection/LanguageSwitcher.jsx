import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

import ukrainian from 'images/flags/ua.jpg';
import english from 'images/flags/en.jpg';
import polish from 'images/goose-header.png';

import {
  FlagImg,
  LanguageButton,
  LanguageBtnWrapper,
} from './AuthSection.styled';

const LanguageSwitcher = ({ position, onClose }) => {
  const [current, setCurrent] = useState('');

  const { i18n } = useTranslation();
  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };
  const item = localStorage.getItem('i18nextLng');

  useEffect(() => {
    setCurrent(item);
  }, [item]);

  return (
    <LanguageBtnWrapper position={position}>
      <LanguageButton
        onClick={() => {
          changeLanguage('pl');
          if (position === 'menu') {
            onClose();
            return;
          }
        }}
      >
        <FlagImg
          src={polish}
          alt="polish"
          position={position}
          isActive={current === 'pl'}
          language="pl"
        />
      </LanguageButton>
      <LanguageButton
        onClick={() => {
          changeLanguage('ua');
          if (position === 'menu') {
            onClose();
            return;
          }
        }}
      >
        <FlagImg
          src={ukrainian}
          alt="ukrainian"
          position={position}
          isActive={current === 'ua'}
          language="ua"
        />
      </LanguageButton>
      <LanguageButton
        onClick={() => {
          changeLanguage('en');
          if (position === 'menu') {
            onClose();
            return;
          }
        }}
      >
        <FlagImg
          src={english}
          alt="english"
          position={position}
          isActive={current === 'en'}
          language="en"
        />
      </LanguageButton>
    </LanguageBtnWrapper>
  );
};

LanguageSwitcher.propTypes = {
  position: PropTypes.string.isRequired,
};

export default LanguageSwitcher;
