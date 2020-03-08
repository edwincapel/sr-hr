import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap";

import { Props } from "../helpers/helpers";

export default function Review(props: Props) {
  return (
    <Container className={"h-100"} fluid>
      <Row className={"h-100"}>
        <Col className="d-flex justify-content-center align-items-center">
          <p>Name: {props.name}</p>
          <p>Mail: {props.mail}</p>
          <p>About: {props.about}</p>
          {/* <p>Name: {props.name}</p> */}
        </Col>
      </Row>
    </Container>
  );
}
