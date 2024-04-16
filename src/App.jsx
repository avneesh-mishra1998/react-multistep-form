import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import FirstPage from "./components/sections/FirstPage";
import SecondPage from "./components/sections/SecondPage";
import ThirdPage from "./components/sections/ThirdPage";

import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import {
  useForm,
  FormProvider,
} from "react-hook-form";


function App() {
  const totalSteps = ["Info", "Contact", "Personal"]
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
    },
  });
  const [step, setstep] = useState(0);

  const nextStep = () => {
    console.log(Object.keys(methods.formState.errors).length, "------");
    setstep(step + 1);
    if(step == 2 && Object.keys(methods.formState.errors).length){
      alert("Please fill form correctlly")
      setstep(0)
    }
  };

  const prevStep = () => {
    setstep(step - 1);
  };


  const handleNext = (e,data) => {
    e.preventDefault()
    // Call post api here...
    console.log(data);
  };
  const isStepFalied = () => {
    return Boolean(Object.keys(methods.formState.errors).length);
  };

  return (
    <div className="App">
      <Stepper alternativeLabel activeStep={step}>
        {totalSteps.map((steps, index) => {
          console.log(index);
          const labelProps = {};
          const stepProps = {};
          if (isStepFalied() && step == index) {
            console.log(isStepFalied());
            labelProps.error = true;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{steps}</StepLabel>
            </Step>
          );
        })}
      </Stepper>


      { step === totalSteps.length ? (
          <Typography variant="h3" align="center">
            Thank You
          </Typography>
        ) : (
          <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(handleNext)}>
                <Container>
                  <Row>
                    <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                      <div style={{ display: step === 0 ? "block" : "none" }}><FirstPage/></div>
                      <div style={{ display: step === 1 ? "block" : "none" }}><SecondPage/></div>
                      <div style={{ display: step === 2 ? "block" : "none" }}><ThirdPage/></div>
                    </Col>
                    <Button
                      disabled={step === 3}
                      onClick={prevStep}
                    >
                      back
                    </Button>
                    
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={nextStep}
                    >
                      {step === totalSteps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </Row>
                </Container>
              </form>
          </FormProvider>
        )
      }      
    </div>
  );
}

export default App;
