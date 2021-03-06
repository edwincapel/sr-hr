import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import { Button } from "reactstrap";
import { Props } from "../helpers/helpers"

export default function Welcome(props: Props) {
  return (
    <Container className={"h-100"} fluid>
      <Row className={"h-100"} style={{ backgroundColor: "#000" }}>
        <Col
          className={
            "d-flex justify-content-center align-items-center flex-column"
          }
        >
          <h1 style={{ ...H1Style }} className="text-center">
            Welcome to our resume uploader
          </h1>
          <p style={{ ...ParagraphStyle }}>
            Follow the next steps to start your application
          </p>
          <Button 
            className={"btn-lg w-50 mt-5"} 
            style={{ ...ButtonStyle }}
            onClick={()=>{props.setStep(2)}}
          >
            Start
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

const H1Style = {
  fontFamily: "Montserrat, sans-serif",
  color: "#FFAC08",
  fontWeight: 600,
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