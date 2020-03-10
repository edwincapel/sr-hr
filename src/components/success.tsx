import React from "react";
import { Container, Col, Row } from "reactstrap";
import { Props } from "../helpers/helpers";

export default function Success(props: Props) {
  return (
    <Container className={"h-100"} fluid>
      <Row className={"h-100"} style={{ backgroundColor: "#000" }}>
        <Col
          className={
            "d-flex justify-content-center align-items-center flex-column"
          }
        >
          <h1 style={{ ...H1Style }} className="text-center">
            Nice! You've successfully uploaded your resume
          </h1>
          <p style={{ ...ParagraphStyle }}>
            We will be in touch with you at {props.mail}
          </p>
          <p>In the mean time, visit this google form {props.response.data.message}</p>
        </Col>
      </Row>
    </Container>
  );
}

const H1Style = {
  fontFamily: "Montserrat, sans-serif",
  color: "#FFAC08",
  fontWeight: 600
};

const ParagraphStyle = {
  fontFamily: "Montserrat, sans-serif",
  color: "#fff",
  fontWeight: 500
};

const ButtonStyle = {
  fontFamily: "Montserrat, sans-serif",
  color: "#000",
  fontWeight: 500,
  borderColor: "transparent",
  backgroundColor: "rgba(255, 172, 8, 0.8)"
};
