import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormFeedback, Alert } from "reactstrap";
import { Props } from "../helpers/helpers";
import * as EmailValidator from "email-validator";

export default function StepOne(props: Props) {
  const [invalidAbout, setInvalidAbout] = useState(!(props.about.length > 0 && props.about.length <= 255))
  const [validEmail, setValidEmail] = useState(
    props.mail.length > 0 && EmailValidator.validate(props.mail)
  );
  const [errors, setErrors] = useState([])
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
  }

  const handleChange = (): void => {
    let customErrors = [];

    if (!validEmail) {
      customErrors.push('Email: Email is not valid')
    }

    if(props.about.length === 0){
      customErrors.push("About: Tell us something about yourself lah");
    }
    else if (props.about.length > 0 && invalidAbout){
      customErrors.push("About: Max 255 characters");
    }

    if(customErrors.length === 0 && props.about.length > 0 && props.mail.length > 0){
      props.setStep(4);
    }
    else{
      setErrors(customErrors);
      setVisible(true);
    }
  };

  const validateEmail = () => {
    if (EmailValidator.validate(props.mail)) {
      setValidEmail(true);
    }
    else {
      setValidEmail(false);
    }
  }

  const validateAbout = () => {
    if (props.about.length > 255) {
      setInvalidAbout(true);
    }
    else {
      setInvalidAbout(false);
    }
  }

  return (
    <Container className={"h-100"} fluid>
      <Row className={"h-100"} style={{ backgroundColor: "#000" }}>
        <Col className="d-flex justify-content-center align-items-center flex-column">
          <h1 className="mb-5 text-center" style={{ ...H1Style }}>
            Tell us more about yourself
          </h1>
          {errors.length > 0 && (
            <>
              {errors.map((error: string, index: number) => {
                return (
                  <Alert
                    key={`${index}`}
                    color="danger"
                    className="mb-3 w-75"
                    isOpen={visible}
                    toggle={onDismiss}
                    fade={true}
                  >
                    {error}
                  </Alert>
                );
              })}
            </>
          )}
          <Form className="w-75 d-flex justify-content-center align-items-center flex-column">
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0 w-75">
              <Label
                for="firstName"
                className="mr-sm-2"
                style={{ ...LabelStyle }}
              >
                E-mail
              </Label>
              <Input
                valid={validEmail}
                invalid={props.mail.length > 0 && !validEmail}
                value={props.mail}
                type="email"
                name="Email"
                id="email"
                placeholder="johndoe@example.com"
                onChange={e => {
                  props.setMail(e.target.value);
                  validateEmail();
                }}
              />
              <FormFeedback>Please use valid email format : johndoe@example.com</FormFeedback>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0 w-75 mt-5">
              <Label
                for="lastName"
                className="mr-sm-2"
                style={{ ...LabelStyle }}
              >
                About
              </Label>
              <Input
                valid={props.about.length > 0 && !invalidAbout}
                invalid={props.about.length > 0 && invalidAbout}
                value={props.about}
                type="textarea"
                name="about"
                id="about"
                placeholder="About"
                onChange={e => {
                  props.setAbout(e.target.value);
                  validateAbout();
                }}
              />
              <FormFeedback>Oh noes! Max 255 characters</FormFeedback>
            </FormGroup>
            <Button
              onClick={e => {
                e.preventDefault;
                handleChange();
              }}
              className={"btn-lg w-50 mt-5"}
              style={{ ...ButtonStyle }}
            >
              Next
            </Button>
            <Button
              className={"bg-transparent border-0 text-white mb-5"}
              onClick={() => props.setStep(2)}
            >
              {"Back"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

const ButtonStyle = {
  fontFamily: "Montserrat, sans-serif",
  color: "#000",
  fontWeight: 500,
  borderColor: "transparent",
  backgroundColor: "rgba(255, 172, 8, 0.8)"
};

const LabelStyle = {
  fontFamily: "Montserrat, sans-serif",
  color: "#FFAC08",
  fontWeight: 600
};

const H1Style = {
  fontFamily: "Montserrat, sans-serif",
  color: "#FFAC08",
  fontWeight: 600
};