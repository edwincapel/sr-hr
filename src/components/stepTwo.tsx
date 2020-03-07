import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Props } from "../helpers/helpers";

export default function StepOne(props: Props) {
  const [mail, setMail] = useState("");
  const [about, setAbout] = useState("");

  const handleChange = (): void => {
    props.setMail(mail);
    props.setAbout(about)
    props.setStep(3);
  };

  return (
    <Container className={"h-100"} fluid>
      <Row className={"h-100"}>
        <Col className="d-flex justify-content-center align-items-center">
          <Form className="w-75">
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="firstName" className="mr-sm-2">
                Mail Title
              </Label>
              <Input
                type="text"
                name="Title"
                id="title"
                placeholder="Title"
                onChange={e => {
                  setMail(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="lastName" className="mr-sm-2">
                About
              </Label>
              <Input
                type="textarea"
                name="about"
                id="about"
                placeholder="About"
                onChange={e => {
                  setAbout(e.target.value);
                }}
              />
            </FormGroup>
            <Button
              onClick={e => {
                e.preventDefault;
                handleChange();
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
