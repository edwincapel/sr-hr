import React from 'react';
import StepOne from '../components/stepOne';
import StepTwo from '../components/stepTwo';
import StepThree from '../components/stepThree';

export interface Props {
  step: number;
  name: string;
  mail: string;
  about: string;
  setName: (name: string) => void;
  setMail: (name: string) => void;
  setAbout: (name: string) => void;
  setStep: (nextStep: number) => void;
}

interface IStepsComponents {
  [key: number]: any;
}

export const stepsComponents: IStepsComponents = {
  1: StepOne,
  2: StepTwo,
  3: StepThree,
};

function formHelper(
  props: Props
) {
  const Component = stepsComponents[props.step];
  if (Component) {
    return <Component {...props} />;
  }
  return null;
}

export default formHelper;