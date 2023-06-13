import styled from 'styled-components';

const colorWhite = '#fff';
// const colorGray = '#343434';
const colorBlue = '#3e85f3';
const fontFamily = 'Inter';
const fontWeightBold = 600;
const fontWeightSemiBold = 700;
const fontSizeSmall = 14;
const fontSizeMedium = 16;
const lineHeightMedium = 18;

export const WeeksItem = styled.div`
  display: flex;
  height: 68px;
  padding: 10px 0;
  font-family: ${fontFamily};
  font-weight: ${fontWeightBold};
  font-size: ${fontSizeMedium}px;
  line-height: ${lineHeightMedium}px;
  text-transform: uppercase;
  border: 1px solid transparent;
  background: ${p => p.theme.colors.second_backgrond_mode};
  border-radius: 8px;
  color: ${p => p.theme.colors.user_label_color};
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

export const WeeksItemDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27px;
  height: 26px;
  padding: 3px;
  background: ${p => p.theme.colors.second_backgrond_mode};
  border-radius: 6px;
  font-family: ${fontFamily};
  font-weight: ${fontWeightSemiBold};
  font-size: ${fontSizeMedium}px;
  line-height: ${lineHeightMedium}px;
  color: ${p => p.theme.colors.primary_text_mode};
`;

export const WeeksItemCurrent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27px;
  height: 26px;
  padding: 5px;
  background: ${colorBlue};
  border-radius: 6px;
  color: ${colorWhite};
  font-family: ${fontFamily};
  font-weight: ${fontWeightBold};
  font-size: ${fontSizeMedium}px;
  line-height: ${lineHeightMedium}px;
`;

export const DivGridWeeks = styled.div`
  border-radius: 8px;
  background: ${p => p.theme.colors.second_backgrond_mode};
  border: ${p => p.theme.colors.calendar_out_border};
  margin: 24px 0 32px;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  & :nth-child(6),
  & :nth-child(7) {
    color: ${colorBlue};
  }
`;

export const WeeksItemDateName = styled.div`
  margin-bottom: 4px;
  font-size: ${fontSizeSmall}px;
  font-weight: ${fontWeightBold};
  line-height: ${lineHeightMedium}px;
`;

const commonDayStyles = `
  display: inline-block;
  border-radius: 6px;
  cursor: pointer;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
`;

export const SelectedDay = styled.button`
  ${commonDayStyles};
`;

export const NotSelectedDay = styled.button`
  ${commonDayStyles};

  :not(:disabled) {
    :hover,
    :focus {
      outline: 1px solid lightgray;
    }
  }

  :disabled {
    > ${WeeksItemDay} {
      background-color: #f2f2f2;
      cursor: default;
      border: none;
      color: lightgray;
    }
  }
`;
