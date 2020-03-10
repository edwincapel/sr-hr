import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import axios from "axios";

//@ts-ignore
import { Document, Page } from "react-pdf";
import { Props } from "../helpers/helpers";

export default function Review(props: Props) {
  const [pdfSrc, setPdfSrc] = useState()
  const [numPages, setNumPages] = useState()
  const [pageNumber, setPageNumber] = useState(1)
  const [loading, setLoading] = useState(false)
  
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  };

  const reader = new FileReader()
  reader.addEventListener("load", () => {
    // console.log(reader.result);
    // this.setState({
    //   props.,
    //   imgSrc: reader.result
    // })
    setPdfSrc(reader.result);
  })

  if(props.file){
    reader.readAsDataURL(props.file)
  }

  const handlePrev = () => {
    if (pageNumber !== 1) {
      setPageNumber(pageNumber - 1)
    }
  }

  const handleNext = () => {
    if (pageNumber !== numPages) {
      setPageNumber(pageNumber + 1)
    }
  }

  const handleSubmit = () => {
    console.log("submitted");
    setLoading(true)

    let formData = new FormData();
    formData.set("name", `${props.firstName} ${props.lastName}`);
    formData.set("mail", `${props.mail}`);
    formData.set("about", `${props.about}`);
    formData.append("file", props.file);

    axios({
      method: "POST",
      url: "https://cors-anywhere.herokuapp.com/https://sr-recruit.herokuapp.com/resumes",
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
      data: formData
    })
      .then(response => {
        if (response.status === 200) {
          setLoading(false);
          props.setResponse(response)
          props.setStep(6);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <Container className={"h-100"} fluid>
      <Row
        className={"h-100 justify-content-center"}
        style={{ backgroundColor: "#000" }}
      >
        <h5 className="mb-5 mt-4 w-50 text-center" style={{ ...H1Style }}>
          Review your application
        </h5>
        <Col className="d-flex align-items-center flex-column">
          {props.file && (
            <>
              <Document file={pdfSrc} onLoadSuccess={onDocumentLoadSuccess}>
                <Page height={600} pageNumber={pageNumber} />
              </Document>
              <div className="d-flex w-100 justify-content-around">
                <Button
                  className={"btn-lg w-25 mt-5"}
                  style={{ ...ButtonStyle }}
                  onClick={handlePrev}
                >
                  Prev
                </Button>
                <p className="text-white p-3 m-0">
                  Page {pageNumber} of {numPages}
                </p>
                <Button
                  className={"btn-lg w-25 mt-5"}
                  style={{ ...ButtonStyle }}
                  onClick={handleNext}
                >
                  Next
                </Button>
              </div>
            </>
          )}
          <ListGroup className="mt-5 mb-3 w-75">
            <ListGroupItem>
              Name: {props.firstName} {props.lastName}
            </ListGroupItem>
            <ListGroupItem>Mail: {props.mail}</ListGroupItem>
            <ListGroupItem>About: {props.about}</ListGroupItem>
          </ListGroup>
          <Button
            className={"btn-lg w-50 mt-5 mb-2"}
            style={{ ...ButtonStyle }}
            onClick={handleSubmit}
            disabled={loading}
          >
            {
              loading 
              ? <div className="spinner-border text-light" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              : 'Submit Application'
            }
          </Button>
          <Button
            className={"bg-transparent border-0 text-white mb-5"}
            onClick={()=>props.setStep(2)}
          >
            {'Go back to start'}
          </Button>
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

const ButtonStyle = {
  fontFamily: "Montserrat, sans-serif",
  color: "#000",
  fontWeight: 500,
  borderColor: "transparent",
  backgroundColor: "rgba(255, 172, 8, 0.8)"
};