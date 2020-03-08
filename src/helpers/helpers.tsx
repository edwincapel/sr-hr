import React from 'react';
import StepOne from '../components/stepOne';
import StepTwo from '../components/stepTwo';
import StepThree from '../components/stepThree';
import Review from '../components/review';

export interface Props {
  step: number;
  name: string;
  mail: string;
  about: string;
  file: any;
  setName: (name: string) => void;
  setMail: (name: string) => void;
  setAbout: (name: string) => void;
  setStep: (nextStep: number) => void;
  setFile: (upload: any) => void;
}

interface IStepsComponents {
  [key: number]: any;
}

export const stepsComponents: IStepsComponents = {
  1: StepOne,
  2: StepTwo,
  3: StepThree,
  4: Review,
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