import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  width: 500px;
`;

export const Modal = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 335px;
  height: 564px;
  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 57px rgba(17, 17, 17, 0.05);
  border-radius: 8px;
`;
export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 335px;
  //   height: 100vh;
  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 57px rgba(17, 17, 17, 0.05);
  border-radius: 8px;
`;
export const TitleRating = styled.div`
  width: 37px;
  height: 14px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  color: rgba(52, 52, 52, 0.8);
`;

export const CloseModal = styled.div`
  width: 24px;
  height: 24px;
  background-color: white;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  border: none;
`;

export const TitleReview = styled.div`
  width: 42px;
  height: 14px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  color: rgba(52, 52, 52, 0.8);
`;

export const Placeholder = styled.div`
  width: 295px;
  height: 111px;
  left: 0px;
  top: 0px;
  background: #f7f7f7;
  border-radius: 8px;
`;

export const TextReview = styled.div`
  width: 67px;
  height: 18px;
  left: 14px;
  top: 12px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  color: #343434;
`;

export const BtnSave = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  isolation: isolate;
  width: 295px;
  height: 42px;
  left: 20px;
  top: 241px;
  background: #3e85f3;
  border-radius: 8px;
`;

export const TextSave = styled.div`
  width: 33px;
  height: 18px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  color: #ffffff;
`;
