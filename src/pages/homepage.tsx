import React,{useState} from "react";
import { Container, Col, Row } from 'reactstrap';
import formHelper from '../helpers/helpers'

export default function Homepage() {
  const [step, setStep] = useState(1)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [about, setAbout] = useState("");
  const [file, setFile] = useState()
  const [response, setResponse] = useState()
    
  const whichForm = formHelper({
    step,
    setStep,
    firstName,
    lastName,
    setFirstName,
    setLastName,
    mail,
    setMail,
    about,
    setAbout,
    file,
    setFile,
    response,
    setResponse
  });
  
  return (
    <Container fluid className={"h-100"} style={{ position: "relative" }}>
      <img
        src={`${require("../../assets/logosr.png")}`}
        style={{ position: "absolute", top: 20, left: 20, zIndex: 100 }}
        alt=""
      />
      <Row className={"h-100"}>
        <Col md={6} style={{ ...background }} />
        <Col className={"h-100 p-0"} md={6}>
          {whichForm}
        </Col>
      </Row>
    </Container>
  );
}

  const background = {
    backgroundImage: `url(${require("../../assets/team.jpg")})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    filter: "grayscale(100%)"
  };