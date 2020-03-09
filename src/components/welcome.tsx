import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import { Button } from "reactstrap";
import { Props } from "../helpers/helpers"

export default function Welcome(props: Props) {

  return (
    <Container className={"h-100"} fluid>
      <Row className={"h-100"} style={{backgroundColor: '#000'}}>
        <Col className="d-flex justify-content-center align-items-center flex-column">
          <h1>Welcome to our resume uploader</h1>
          <p>Follow the next steps to start your application</p>
          <Button className="w-50">Start</Button>
        </Col>
      </Row>
    </Container>
  );
}
