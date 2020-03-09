import React, { useState } from "react";
import { Container, Col, Row, Button } from "reactstrap";

//@ts-ignore
import { Document, Page } from "react-pdf";
import { Props } from "../helpers/helpers";

export default function Review(props: Props) {
  const [pdfSrc, setPdfSrc] = useState()
  const [numPages, setNumPages] = useState()
  const [pageNumber, setPageNumber] = useState(1)
  
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
  // console.log(`https://www.dropbox.com/home/Apps/sr-hr?preview=${props.file}`);

  return (
    <Container className={"h-100"} fluid>
      <Row className={"h-100"}>
        <Col className="d-flex justify-content-center align-items-center flex-column">
          {/* <p>Name: {props.name}</p>
          <p>Mail: {props.mail}</p>
          <p>About: {props.about}</p> */}
          {/* <p>Name: {props.name}</p> */}
          {props.file && (
            <>
              <Document
                file={pdfSrc}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <div className="d-flex">
                <Button onClick={handlePrev}>Prev</Button>
                <p>
                  Page {pageNumber} of {numPages}
                </p>
                <Button onClick={handleNext}>Next</Button>
              </div>

            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}
