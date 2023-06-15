import React, { useState } from 'react';

import { Modal } from 'components/Modal/Modal';

import {
  FooterStyled,
  TeamLink,
  ModalContent,
  Container,
  CardWrapper,
  ImageWrapper,
  LinkWrapper,
} from './Footer.styled';

import sprite from 'icons/sprite.svg';

import ph01 from 'images/mainPage/TeamFotos/Andrii Pinchuk.jpg';
import ph02 from 'images/mainPage/TeamFotos/Katya Semeniuk.jpg';
import ph03 from 'images/mainPage/TeamFotos/Vitalii Smyrnov.jpg';
import ph04 from 'images/mainPage/TeamFotos/Mykola Naumenko.jpg';
import ph05 from 'images/mainPage/TeamFotos/Yaroslav Kramarchuk.jpg';
import ph06 from 'images/mainPage/TeamFotos/Kyrylo Savchenko.jpg';
import ph07 from 'images/mainPage/TeamFotos/Andrii Melnyk.jpg';
import ph08 from 'images/mainPage/TeamFotos/Andrii Melnyk.jpg';

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <FooterStyled>
        <p>© 2023 | All Rights Reserved |</p>
        &nbsp;Developed by
        <TeamLink onClick={toggleModal}>"DigitalGoose"</TeamLink>
      </FooterStyled>

      {isModalOpen && (
        <Modal handlerCloseModal={toggleModal}>
          <ModalContent>
            <h2>DigitalGoose team</h2>
            <Container>
              <CardWrapper>
                <ImageWrapper>
                  <img
                    src={ph01}
                    alt="Andrii Pinchuk"
                    width="150"
                    height="150"
                  />
                </ImageWrapper>
                <h3>Andrii Pinchuk</h3>
                <p>Team Lead</p>
                <LinkWrapper>
                  <a href="https://github.com/a-pinchuk" title="GitHub">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-github'}></use>
                    </svg>
                  </a>
                  <a href="https://github.com/a-pinchuk" title="LinkedIn">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-linkedin'}></use>
                    </svg>
                  </a>
                </LinkWrapper>
              </CardWrapper>

              <CardWrapper>
                <ImageWrapper>
                  <img
                    src={ph01}
                    alt="Andrii Pinchuk"
                    width="150"
                    height="150"
                  />
                </ImageWrapper>
                <h3>Andrii Pinchuk</h3>
                <p>Team Lead</p>
                <LinkWrapper>
                  <a href="https://github.com/a-pinchuk" title="GitHub">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-github'}></use>
                    </svg>
                  </a>
                  <a href="https://github.com/a-pinchuk" title="LinkedIn">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-linkedin'}></use>
                    </svg>
                  </a>
                </LinkWrapper>
              </CardWrapper>

              <CardWrapper>
                <ImageWrapper>
                  <img
                    src={ph01}
                    alt="Andrii Pinchuk"
                    width="150"
                    height="150"
                  />
                </ImageWrapper>
                <h3>Andrii Pinchuk</h3>
                <p>Team Lead</p>
                <LinkWrapper>
                  <a href="https://github.com/a-pinchuk" title="GitHub">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-github'}></use>
                    </svg>
                  </a>
                  <a href="https://github.com/a-pinchuk" title="LinkedIn">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-linkedin'}></use>
                    </svg>
                  </a>
                </LinkWrapper>
              </CardWrapper>

              <CardWrapper>
                <ImageWrapper>
                  <img
                    src={ph01}
                    alt="Andrii Pinchuk"
                    width="150"
                    height="150"
                  />
                </ImageWrapper>
                <h3>Andrii Pinchuk</h3>
                <p>Team Lead</p>
                <LinkWrapper>
                  <a href="https://github.com/a-pinchuk" title="GitHub">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-github'}></use>
                    </svg>
                  </a>
                  <a href="https://github.com/a-pinchuk" title="LinkedIn">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-linkedin'}></use>
                    </svg>
                  </a>
                </LinkWrapper>
              </CardWrapper>

              <CardWrapper>
                <ImageWrapper>
                  <img
                    src={ph01}
                    alt="Andrii Pinchuk"
                    width="150"
                    height="150"
                  />
                </ImageWrapper>
                <h3>Andrii Pinchuk</h3>
                <p>Team Lead</p>
                <LinkWrapper>
                  <a href="https://github.com/a-pinchuk" title="GitHub">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-github'}></use>
                    </svg>
                  </a>
                  <a href="https://github.com/a-pinchuk" title="LinkedIn">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-linkedin'}></use>
                    </svg>
                  </a>
                </LinkWrapper>
              </CardWrapper>

              <CardWrapper>
                <ImageWrapper>
                  <img
                    src={ph01}
                    alt="Andrii Pinchuk"
                    width="150"
                    height="150"
                  />
                </ImageWrapper>
                <h3>Andrii Pinchuk</h3>
                <p>Team Lead</p>
                <LinkWrapper>
                  <a href="https://github.com/a-pinchuk" title="GitHub">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-github'}></use>
                    </svg>
                  </a>
                  <a href="https://github.com/a-pinchuk" title="LinkedIn">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-linkedin'}></use>
                    </svg>
                  </a>
                </LinkWrapper>
              </CardWrapper>

              <CardWrapper>
                <ImageWrapper>
                  <img
                    src={ph01}
                    alt="Andrii Pinchuk"
                    width="150"
                    height="150"
                  />
                </ImageWrapper>
                <h3>Andrii Pinchuk</h3>
                <p>Team Lead</p>
                <LinkWrapper>
                  <a href="https://github.com/a-pinchuk" title="GitHub">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-github'}></use>
                    </svg>
                  </a>
                  <a href="https://github.com/a-pinchuk" title="LinkedIn">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-linkedin'}></use>
                    </svg>
                  </a>
                </LinkWrapper>
              </CardWrapper>

              <CardWrapper>
                <ImageWrapper>
                  <img
                    src={ph01}
                    alt="Andrii Pinchuk"
                    width="150"
                    height="150"
                  />
                </ImageWrapper>
                <h3>Andrii Pinchuk</h3>
                <p>Team Lead</p>
                <LinkWrapper>
                  <a href="https://github.com/a-pinchuk" title="GitHub">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-github'}></use>
                    </svg>
                  </a>
                  <a href="https://github.com/a-pinchuk" title="LinkedIn">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-linkedin'}></use>
                    </svg>
                  </a>
                </LinkWrapper>
              </CardWrapper>

              <CardWrapper>
                <ImageWrapper>
                  <img
                    src={ph01}
                    alt="Andrii Pinchuk"
                    width="150"
                    height="150"
                  />
                </ImageWrapper>
                <h3>Andrii Pinchuk</h3>
                <p>Team Lead</p>
                <LinkWrapper>
                  <a href="https://github.com/a-pinchuk" title="GitHub">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-github'}></use>
                    </svg>
                  </a>
                  <a href="https://github.com/a-pinchuk" title="LinkedIn">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-linkedin'}></use>
                    </svg>
                  </a>
                </LinkWrapper>
              </CardWrapper>

              <CardWrapper>
                <ImageWrapper>
                  <img
                    src={ph01}
                    alt="Andrii Pinchuk"
                    width="150"
                    height="150"
                  />
                </ImageWrapper>
                <h3>Andrii Pinchuk</h3>
                <p>Team Lead</p>
                <LinkWrapper>
                  <a href="https://github.com/a-pinchuk" title="GitHub">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-github'}></use>
                    </svg>
                  </a>
                  <a href="https://github.com/a-pinchuk" title="LinkedIn">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-linkedin'}></use>
                    </svg>
                  </a>
                </LinkWrapper>
              </CardWrapper>

              <CardWrapper>
                <ImageWrapper>
                  <img
                    src={ph01}
                    alt="Andrii Pinchuk"
                    width="150"
                    height="150"
                  />
                </ImageWrapper>
                <h3>Andrii Pinchuk</h3>
                <p>Team Lead</p>
                <LinkWrapper>
                  <a href="https://github.com/a-pinchuk" title="GitHub">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-github'}></use>
                    </svg>
                  </a>
                  <a href="https://github.com/a-pinchuk" title="LinkedIn">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-linkedin'}></use>
                    </svg>
                  </a>
                </LinkWrapper>
              </CardWrapper>

              <CardWrapper>
                <ImageWrapper>
                  <img
                    src={ph01}
                    alt="Andrii Pinchuk"
                    width="150"
                    height="150"
                  />
                </ImageWrapper>
                <h3>Andrii Pinchuk</h3>
                <p>Team Lead</p>
                <LinkWrapper>
                  <a href="https://github.com/a-pinchuk" title="GitHub">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-github'}></use>
                    </svg>
                  </a>
                  <a href="https://github.com/a-pinchuk" title="LinkedIn">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-linkedin'}></use>
                    </svg>
                  </a>
                </LinkWrapper>
              </CardWrapper>

              <CardWrapper>
                <ImageWrapper>
                  <img
                    src={ph01}
                    alt="Andrii Pinchuk"
                    width="150"
                    height="150"
                  />
                </ImageWrapper>
                <h3>Andrii Pinchuk</h3>
                <p>Team Lead</p>
                <LinkWrapper>
                  <a href="https://github.com/a-pinchuk" title="GitHub">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-github'}></use>
                    </svg>
                  </a>
                  <a href="https://github.com/a-pinchuk" title="LinkedIn">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-linkedin'}></use>
                    </svg>
                  </a>
                </LinkWrapper>
              </CardWrapper>

              <CardWrapper>
                <ImageWrapper>
                  <img
                    src={ph01}
                    alt="Andrii Pinchuk"
                    width="150"
                    height="150"
                  />
                </ImageWrapper>
                <h3>Andrii Pinchuk</h3>
                <p>Team Lead</p>
                <LinkWrapper>
                  <a href="https://github.com/a-pinchuk" title="GitHub">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-github'}></use>
                    </svg>
                  </a>
                  <a href="https://github.com/a-pinchuk" title="LinkedIn">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-linkedin'}></use>
                    </svg>
                  </a>
                </LinkWrapper>
              </CardWrapper>

              <CardWrapper>
                <ImageWrapper>
                  <img
                    src={ph01}
                    alt="Andrii Pinchuk"
                    width="150"
                    height="150"
                  />
                </ImageWrapper>
                <h3>Andrii Pinchuk</h3>
                <p>Team Lead</p>
                <LinkWrapper>
                  <a href="https://github.com/a-pinchuk" title="GitHub">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-github'}></use>
                    </svg>
                  </a>
                  <a href="https://github.com/a-pinchuk" title="LinkedIn">
                    <svg height="20" width="20">
                      <use href={sprite + '#icon-linkedin'}></use>
                    </svg>
                  </a>
                </LinkWrapper>
              </CardWrapper>
            </Container>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
