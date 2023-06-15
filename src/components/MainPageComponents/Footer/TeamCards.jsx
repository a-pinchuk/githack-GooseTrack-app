import React from 'react';

import {
  Container,
  CardWrapper,
  ImageWrapper,
  LinkWrapper,
} from './TeamCards.styled';

import sprite from 'icons/sprite.svg';

import ph01 from 'images/mainPage/TeamFotos/Andrii_Pinchuk.jpg';
import ph02 from 'images/mainPage/TeamFotos/Kateryna_Semeniuk.jpg';
import ph03 from 'images/mainPage/TeamFotos/Vitalii_Smyrnov.jpg';
import ph04 from 'images/mainPage/TeamFotos/Serhii_Kostiuchenko.jpg';
import ph05 from 'images/mainPage/TeamFotos/Mykola_Naumenko.jpg';
import ph06 from 'images/mainPage/TeamFotos/Dmytro_Havryliak.jpg';
import ph07 from 'images/mainPage/TeamFotos/Roman_Vozniuk.jpg';
import ph08 from 'images/mainPage/TeamFotos/Oleksandr_Shevchuk.jpg';
import ph09 from 'images/mainPage/TeamFotos/Yaroslav_Kramarchuk.jpg';
import ph10 from 'images/mainPage/TeamFotos/Kyrylo_Savchenko.jpg';
import ph11 from 'images/mainPage/TeamFotos/Oleksii_Vitomskyi.jpg';
import ph12 from 'images/mainPage/TeamFotos/Andrii_Melnyk.jpg';
import ph13 from 'images/mainPage/TeamFotos/Dmytro_Shkilniuk.jpg';
import ph14 from 'images/mainPage/TeamFotos/Taras_Tikan.jpg';
import ph15 from 'images/mainPage/TeamFotos/Yurii_Mykhalchenko.jpg';

export const TeamCards = () => {
  return (
    <Container>
      <CardWrapper>
        <ImageWrapper>
          <img src={ph01} alt="Andrii Pinchuk" width="200" height="200" />
        </ImageWrapper>
        <h3>Andrii Pinchuk</h3>
        <p>Team Lead</p>
        <LinkWrapper>
          <a
            href="https://github.com/a-pinchuk"
            title="GitHub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-github'}></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/andrii-pinchuk/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-linkedin'}></use>
            </svg>
          </a>
        </LinkWrapper>
      </CardWrapper>

      <CardWrapper>
        <ImageWrapper>
          <img src={ph02} alt="Kateryna Semeniuk" width="200" height="200" />
        </ImageWrapper>
        <h3>Kateryna Semeniuk</h3>
        <p>Scrum master</p>
        <LinkWrapper>
          <a
            href="https://github.com/Katya-Semeniuk"
            title="GitHub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-github'}></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/katya-semeniuk-a2b806260"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-linkedin'}></use>
            </svg>
          </a>
        </LinkWrapper>
      </CardWrapper>

      <CardWrapper>
        <ImageWrapper>
          <img src={ph03} alt="Vitalii Smyrnov" width="200" height="200" />
        </ImageWrapper>
        <h3>Vitalii Smyrnov</h3>
        <p>Developer</p>
        <LinkWrapper>
          <a
            href="https://github.com/VitaliiSmyrnov"
            title="GitHub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-github'}></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/vitalii-smyrnov/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-linkedin'}></use>
            </svg>
          </a>
        </LinkWrapper>
      </CardWrapper>

      <CardWrapper>
        <ImageWrapper>
          <img src={ph04} alt="Serhii Kostiuchenko" width="200" height="200" />
        </ImageWrapper>
        <h3>Serhii Kostiuchenko</h3>
        <p>Developer</p>
        <LinkWrapper>
          <a
            href="https://github.com/Kcepriu"
            title="GitHub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-github'}></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/serhii-kostiuchenko/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-linkedin'}></use>
            </svg>
          </a>
        </LinkWrapper>
      </CardWrapper>

      <CardWrapper>
        <ImageWrapper>
          <img src={ph05} alt="Mykola Naumenko" width="200" height="200" />
        </ImageWrapper>
        <h3>Mykola Naumenko</h3>
        <p>Developer</p>
        <LinkWrapper>
          <a
            href="https://github.com/NNaumenko83"
            title="GitHub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-github'}></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/mykola--naumenko/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-linkedin'}></use>
            </svg>
          </a>
        </LinkWrapper>
      </CardWrapper>

      <CardWrapper>
        <ImageWrapper>
          <img src={ph06} alt="Dmytro Havryliak" width="200" height="200" />
        </ImageWrapper>
        <h3>Dmytro Havryliak</h3>
        <p>Developer</p>
        <LinkWrapper>
          <a
            href="https://github.com/DimaHavr"
            title="GitHub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-github'}></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/dmytro-havryliak/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-linkedin'}></use>
            </svg>
          </a>
        </LinkWrapper>
      </CardWrapper>

      <CardWrapper>
        <ImageWrapper>
          <img src={ph07} alt="Roman Vozniuk" width="200" height="200" />
        </ImageWrapper>
        <h3>Roman Vozniuk</h3>
        <p>Developer</p>
        <LinkWrapper>
          <a
            href="https://github.com/VozzRoman"
            title="GitHub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-github'}></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/voznuke-roman/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-linkedin'}></use>
            </svg>
          </a>
        </LinkWrapper>
      </CardWrapper>

      <CardWrapper>
        <ImageWrapper>
          <img src={ph08} alt="Oleksandr Shevchuk" width="200" height="200" />
        </ImageWrapper>
        <h3>Oleksandr Shevchuk</h3>
        <p>Developer</p>
        <LinkWrapper>
          <a
            href="https://github.com/Sasha92Shevchuk"
            title="GitHub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-github'}></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/oleksandr-shevchuk-y/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-linkedin'}></use>
            </svg>
          </a>
        </LinkWrapper>
      </CardWrapper>

      <CardWrapper>
        <ImageWrapper>
          <img src={ph09} alt="Yaroslav Kramarchuk" width="200" height="200" />
        </ImageWrapper>
        <h3>Yaroslav Kramarchuk</h3>
        <p>Developer</p>
        <LinkWrapper>
          <a
            href="https://github.com/YarKram"
            title="GitHub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-github'}></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/yaroslav-kramarchuk/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-linkedin'}></use>
            </svg>
          </a>
        </LinkWrapper>
      </CardWrapper>

      <CardWrapper>
        <ImageWrapper>
          <img src={ph10} alt="Kyrylo Savchenko" width="200" height="200" />
        </ImageWrapper>
        <h3>Kyrylo Savchenko</h3>
        <p>Developer</p>
        <LinkWrapper>
          <a
            href="https://github.com/Kyrylo2"
            title="GitHub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-github'}></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/savchenko-kyrylo/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-linkedin'}></use>
            </svg>
          </a>
        </LinkWrapper>
      </CardWrapper>

      <CardWrapper>
        <ImageWrapper>
          <img src={ph11} alt="Oleksii Vitomskyi" width="200" height="200" />
        </ImageWrapper>
        <h3>Oleksii Vitomskyi</h3>
        <p>Developer</p>
        <LinkWrapper>
          <a
            href="https://github.com/Alexey7272"
            title="GitHub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-github'}></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/oleksii-vitomskyi"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-linkedin'}></use>
            </svg>
          </a>
        </LinkWrapper>
      </CardWrapper>

      <CardWrapper>
        <ImageWrapper>
          <img src={ph12} alt="Andrii Melnyk" width="200" height="200" />
        </ImageWrapper>
        <h3>Andrii Melnyk</h3>
        <p>Developer</p>
        <LinkWrapper>
          <a
            href="https://github.com/ammolder"
            title="GitHub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-github'}></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ammolder/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-linkedin'}></use>
            </svg>
          </a>
        </LinkWrapper>
      </CardWrapper>

      <CardWrapper>
        <ImageWrapper>
          <img src={ph13} alt="Dmytro Shkilniuk" width="200" height="200" />
        </ImageWrapper>
        <h3>Dmytro Shkilniuk</h3>
        <p>Developer</p>
        <LinkWrapper>
          <a
            href="https://github.com/Dmytro-1506"
            title="GitHub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-github'}></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/dmytro-shkilniuk-3ba959276/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-linkedin'}></use>
            </svg>
          </a>
        </LinkWrapper>
      </CardWrapper>

      <CardWrapper>
        <ImageWrapper>
          <img src={ph14} alt="Taras Tikan" width="200" height="200" />
        </ImageWrapper>
        <h3>Taras Tikan</h3>
        <p>Developer</p>
        <LinkWrapper>
          <a
            href="https://github.com/TarasTikan"
            title="GitHub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-github'}></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/taras-tikan-317b7a1a7/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-linkedin'}></use>
            </svg>
          </a>
        </LinkWrapper>
      </CardWrapper>

      <CardWrapper>
        <ImageWrapper>
          <img src={ph15} alt="Yurii Mykhalchenko" width="200" height="200" />
        </ImageWrapper>
        <h3>Yurii Mykhalchenko</h3>
        <p>Developer</p>
        <LinkWrapper>
          <a
            href="https://github.com/YuriiMykhalchenko"
            title="GitHub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-github'}></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/yurii-mykhalchenko"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg height="20" width="20">
              <use href={sprite + '#icon-linkedin'}></use>
            </svg>
          </a>
        </LinkWrapper>
      </CardWrapper>
    </Container>
  );
};
