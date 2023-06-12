import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const steps = [
  {
    // selector: '.first-step',
    selector: '[data-tour="1"]',
    content: 'Hello! You are on this tab',
  },
  {
    selector: '[data-tour="2"]',
    content: 'Select the "Day" tab to navigate to the days',
  },
  {
    selector: '[data-tour="3"]',
    content:
      'You can also change months or days backwards by clicking "<" or forwards by clicking ">"',
  },
  {
    selector: '[data-tour="4"]',
    content: 'You can also immediately jump to the day of the selected month',
  },
  {
    selector: '[data-tour="5"]',
    content:
      'Next, you can choose what type of task you want to create, p.s. if you swipe left, another type will open)',
  },
  {
    selector: '[data-tour="6"]',
    content: 'Click on "Add task" to create a task',
  },
  {
    selector: '[data-tour="7"]',
    content:
      'Enter the required text and finally create the task! Now it will always be here. Enjoy it and have a good day!',
  },
];

export const useSteps = () => {
  const redirect = useNavigate();
  const [step, setStep] = useState(0);

  const setCurrentStep = step => {
    switch (step) {
      case 5:
        redirect('day/:currentDay', true);
        break;
      default:
        break;
    }
    setStep(step);
  };
  return {
    step,
    setCurrentStep,
  };
};
