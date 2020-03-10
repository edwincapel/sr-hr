import React from 'react';
import StepOne from '../components/stepOne';
import StepTwo from '../components/stepTwo';
import StepThree from '../components/stepThree';
import Review from '../components/review';
import Welcome from '../components/welcome';
import Success from '../components/success';

export interface Props {
  step: number;
  firstName: string;
  lastName: string;
  mail: string;
  about: string;
  file: any;
  response: any;
  setFirstName: (name: string) => void;
  setLastName: (name: string) => void;
  setMail: (name: string) => void;
  setAbout: (name: string) => void;
  setStep: (nextStep: number) => void;
  setFile: (upload: any) => void;
  setResponse: (result: any) => void;
}

interface IStepsComponents {
  [key: number]: any;
}

export const stepsComponents: IStepsComponents = {
  1: Welcome,
  2: StepOne,
  3: StepTwo,
  4: StepThree,
  5: Review,
  6: Success,
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