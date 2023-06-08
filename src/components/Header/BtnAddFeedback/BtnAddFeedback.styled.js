import styled from 'styled-components';

export const AddFeedbackBtn = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 97px;
    height: 32px;
    
    background: #3E85F3;
    border-radius: 10px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px; 
    line-height: 16px;

    color: #FFFFFF;
    text-decoration: none;

    @media screen and (min-width: 767px) {
        width: 130px;
        height: 42px;
    }
`;