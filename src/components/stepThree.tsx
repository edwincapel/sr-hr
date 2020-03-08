import React, { useState, useCallback } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label
} from "reactstrap";
import { useDropzone } from 'react-dropzone';

import { Props } from "../helpers/helpers";


export default function StepOne(props: Props) {
  const [file, setFile] = useState();

  const onDrop = useCallback(acceptedFiles => {
    setFile(acceptedFiles)
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop
  });

  const handleChange = (): void => {
    props.setFile(file);
    props.setStep(4);
  };

  return (
    <Container className={"h-100"} fluid>
      <Row className={"h-100"}>
        <Col className="d-flex justify-content-center align-items-center">
          <Form className="w-75">
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="firstName" className="mr-sm-2">
                Upload Resume
              </Label>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p>Drag 'n' drop some files here, or click to select files</p>
                )}
              </div>
            </FormGroup>
            <Button
              onClick={e => {
                e.preventDefault;
                handleChange()
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
