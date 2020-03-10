import React from "react";
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
// import { Dropbox } from 'dropbox';

export default function StepOne(props: Props) {
  
  const onDrop = (file:any) => {
    file.map((file:any) => {
      props.setFile(file);
      // const dbx = new Dropbox({
      //   accessToken: `${DROPBOX_SECRET_KEY}`
      // });

      // dbx.filesUpload({ path: "/" + file.name, contents: file })
      //   .then(function(response) {
      //     props.setFile(file);
      //   })
      //   .catch(function(error) {
      //     console.error(error);
      //   });
      
    })
  }

  const handleChange =()=> {
    props.setStep(5);
  }

  return (
    <Container className={"h-100"} fluid>
      <Row className={"h-100"} style={{ backgroundColor: "#000" }}>
        <Col className="d-flex justify-content-center align-items-center flex-column">
          <Form className="w-75 d-flex justify-content-center align-items-center flex-column">
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0 w-75 text-center">
              <Label
                for="firstName"
                className="mr-sm-2 text-center mb-3"
                style={{ ...LabelStyle }}
              >
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
                    className="dropzone d-flex flex-column justify-content-center align-items-center"
                    style={{
                      minHeight: "100px",
                      minWidth: "100px",
                      borderStyle: "dashed",
                      borderColor: "#fff"
                    }}
                  >
                    <p className={"p-5 text-white"}>
                      {props.file
                        ? props.file.name
                        : "Drop files here, or click to select files"}
                    </p>
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
              className={"btn-lg w-75 mt-5"}
              style={{ ...ButtonStyle }}
            >
              Review Application
            </Button>
            <Button
              className={"bg-transparent border-0 text-white mb-5"}
              onClick={() => props.setStep(3)}
            >
              {"Back"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

const ButtonStyle = {
  fontFamily: "Montserrat, sans-serif",
  color: "#000",
  fontWeight: 500,
  borderColor: "transparent",
  backgroundColor: "rgba(255, 172, 8, 0.8)"
};

const LabelStyle = {
  fontFamily: "Montserrat, sans-serif",
  color: "#FFAC08",
  fontWeight: 600
};

const H1Style = {
  fontFamily: "Montserrat, sans-serif",
  color: "#FFAC08",
  fontWeight: 600
};