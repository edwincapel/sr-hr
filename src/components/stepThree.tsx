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
import Dropzone from "react-dropzone";

import { Props } from "../helpers/helpers";
import { Dropbox } from 'dropbox';

export default function StepOne(props: Props) {
  const onDrop = (file:any) => {
    file.map((file:any) => {
      const dbx = new Dropbox({
        accessToken:
          "Lyja3onZiXAAAAAAAAAAC_yQRSCxnYRSfWc4QZVO2okiWPR3jpy31IoPqmhOpRge",
      });

      dbx.filesUpload({ path: "/" + file.name, contents: file })
        .then(function(response) {
          console.log(response);
          props.setFile(file);
        })
        .catch(function(error) {
          console.error(error);
        });
      
    })
  }

  const handleChange =()=> {
    props.setStep(4);
  }

  return (
    <Container className={"h-100"} fluid>
      <Row className={"h-100"}>
        <Col className="d-flex justify-content-center align-items-center">
          <Form className="w-75">
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="firstName" className="mr-sm-2">
                Upload Resume
              </Label>
              <Dropzone
                onDrop={onDrop}
                // onFileDialogCancel={this.onCancel.bind(this)}
                multiple={false}
              >
                {({ getRootProps, getInputProps }) => (
                  <div
                    {...getRootProps()}
                    className="dropzone w-100 h-100 d-flex flex-column justify-content-center align-items-center"
                  >
                    <p>Drop files here, or click to select files</p>
                    <input {...getInputProps()} />
                  </div>
                )}
              </Dropzone>
            </FormGroup>
            <Button
              onClick={e => {
                e.preventDefault;
                handleChange();
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
