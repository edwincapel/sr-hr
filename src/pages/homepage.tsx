import React,{useState} from "react";
import { Container, Col, Row } from 'reactstrap';
import formHelper from '../helpers/helpers'

export default function Homepage() {
  const [step, setStep] = useState(1)
  const [name, setName] = useState("")
  const [mail, setMail] = useState("");
  const [about, setAbout] = useState("");
  const [file, setFile] = useState()
  
  
  const whichForm = formHelper({
    step,
    setStep,
    name,
    setName,
    mail,
    setMail,
    about,
    setAbout,
    file,
    setFile,
  });

  console.log(file);
  
  const background = {
    backgroundImage: `url(${require('../../assets/team.jpg')})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'grayscale(100%)',
  }

  return (
    <Container className="h-100" fluid>
      <Row className="h-100">
        <Col md={6} className="" style={{...background, position: 'relative'}}>
          <img src={`${require('../../assets/logosr.png')}`} style={{position: 'absolute', top: 20}} alt=""/>
        </Col>
        <Col className="h-100 p-0" md={6}>
          {whichForm}
        </Col>
      </Row>
    </Container>
  );
}