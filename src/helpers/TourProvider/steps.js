import styled from 'styled-components';

import gooseMainPage from '../../images/mainPage/tablet/tablet_goose_mainPage.png';
import step2 from './img/step2.gif';
import step3 from './img/step3.gif';
import step4_2 from './img/step4_2.gif';
import step5 from './img/step5.gif';
import step6 from './img/step6.gif';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 350px;

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    max-width: 640px;
  }
`;

const isDesktop = window.innerWidth >= 1440;

export const steps = [
  {
    // selector: '.first-step',
    selector: '[data-tour="1"]',
    content: (
      <Wrapper>
        <p>Hello! You are on this tab</p>
        {isDesktop && <img src={gooseMainPage} alt="Goose" />}
      </Wrapper>
    ),
  },
  {
    selector: '[data-tour="2"]',
    content: (
      <Wrapper>
        <p>Select the "Day" tab to navigate to the days</p>
        {isDesktop && <img src={step2} alt="Day" />}
      </Wrapper>
    ),
  },
  {
    selector: '[data-tour="3"]',
    content: (
      <Wrapper>
        <p>
          You can also change months or days backwards by clicking prev or next
          button
        </p>
        {isDesktop && <img src={step3} alt="Change" />}
      </Wrapper>
    ),
  },
  {
    selector: '[data-tour="4"]',
    content: (
      <Wrapper>
        <p>You can also immediately jump to the day of the selected month</p>
        {isDesktop && <img src={step4_2} alt="Month" />}
      </Wrapper>
    ),
  },
  {
    selector: '[data-tour="5"]',
    content: (
      <Wrapper>
        <p>
          Next, you can choose what type of task you want to create, p.s. if you
          swipe left, another type will open
        </p>
        {isDesktop && <img src={step5} alt="Set Tasks" />}
      </Wrapper>
    ),
  },
  {
    selector: '[data-tour="6"]',
    content: (
      <Wrapper>
        <p>
          Click on "Add task", then enter the required text and finally create
          the task! Now it will always be here. Enjoy it and have a good day!
        </p>
        {isDesktop && <img src={step6} alt="Write Tasks" />}
      </Wrapper>
    ),
  },
];
