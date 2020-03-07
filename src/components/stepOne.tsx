import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Props } from "../helpers/helpers"

export default function StepOne(props: Props) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("");

  const handleChange = (): void => {
    props.setName(`${firstName} ${lastName}`);
    props.setStep(2);
  };

  return (
    <Container className={"h-100"} fluid>
      <Row className={"h-100"}>
        <Col className="d-flex justify-content-center align-items-center">
          <Form className="w-75">
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="firstName" className="mr-sm-2">
                First Name
              </Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                onChange={e => {
                  setFirstName(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="lastName" className="mr-sm-2">
                Last Name
              </Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                onChange={e => {
                  setLastName(e.target.value);
                }}
              />
            </FormGroup>
            <Button onClick={(e)=>{
                e.preventDefault 
                handleChange()
              }}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
