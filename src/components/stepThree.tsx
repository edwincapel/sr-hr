import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Props } from "../helpers/helpers";

export default function StepOne(props: Props) {
  const [file, setFile] = useState();

  const handleChange = ({file}): any => {
    
  };

  console.log(file);
  

  return (
    <Container className={"h-100"} fluid>
      <Row className={"h-100"}>
        <Col className="d-flex justify-content-center align-items-center">
          <Form className="w-75">
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="firstName" className="mr-sm-2">
                Upload Resume
              </Label>
              <Input
                type="file"
                name="resume"
                id="resume"
                placeholder="Resume"
                onChange={(e)=>{}}
              />
            </FormGroup>
            <Button
              onClick={e => {
                e.preventDefault;
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
