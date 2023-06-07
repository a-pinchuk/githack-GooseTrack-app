import styled from "styled-components";


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

export const HeaderUserInfoSection = styled.div`
    display: flex;
`;

export const HeaderUserName = styled.h3`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: var(--primary-text);

    @media screen and (min-width: 767px) {
        font-size: 14px;
        margin-left: 8px;
    }
`;

export const HeaderUserPhoto = styled.img`
    background-color: #FFFFFF;
    box-sizing: border-box;

    width: 32px;
    height: 32px;

    border: 1.8px solid #3E85F3;
    border-radius: 50%;

    margin-left: 8px;

    @media screen and (min-width: 767px) {
        width: 44px;
        height: 44px;
    
        margin-left: 14px;
    }
`;

export const TextAvatar = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  border: 1.8px solid #3E85F3;
  margin-left: 8px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  overflow: hidden;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: black;
  font-weight: 12;
  background-color: ${getRandomColor()};
  
    @media screen and (min-width: 767px) {
        width: 44px;
        height: 44px;

        margin-left: 14px;
    }
`;