import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { Props } from "../helpers/helpers"

export default function StepOne(props: Props) {
  const [errors, setErrors] = useState([]);
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
  };

  const handleChange = (): void => {
    let customErrors = [];

    if (props.firstName.length === 0) {
      customErrors.push('First Name: Please enter First Name')
    }

    if (props.lastName.length === 0) {
      customErrors.push("Last Name: Please enter Last Name");
    }

    if (props.firstName.length > 0 && props.lastName.length > 0) {
      props.setStep(3);
    }
    else{
      setErrors(customErrors);
      setVisible(true);
    }

  };

  return (
    <Container className={"h-100"} fluid>
      <Row className={"h-100"} style={{ backgroundColor: "#000" }}>
        <Col className="d-flex justify-content-center align-items-center flex-column">
          <h1 className="mb-5" style={{ ...H1Style }}>
            What's your name ?
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
                First Name
              </Label>
              <Input
                valid={props.firstName.length > 0}
                value={props.firstName}
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                onChange={e => {
                  props.setFirstName(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0 w-75 mt-5">
              <Label
                for="lastName"
                className="mr-sm-2"
                style={{ ...LabelStyle }}
              >
                Last Name
              </Label>
              <Input
                valid={props.lastName.length > 0}
                value={props.lastName}
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                onChange={e => {
                  props.setLastName(e.target.value);
                }}
              />
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