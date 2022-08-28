import React, { useState } from "react";
import {
  Button,
  Box,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import SenderInfo from "./SenderInfo";
import GoodsInfo from "./GoodsInfo";
import Destination from "./Destination";
import SimpleBar from "simplebar-react";

const steps = ["Sender Info", "Destination", "Goods Info"];


export default function Shipping() {
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    address: "",
    address2: "",
    idNumber: "",
    email: "",
    phoneNumber: "",
  });
  const [contacts, setContacts] = useState([]);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  console.log(city, state)
  return (
    <SimpleBar style={{ height: "100%", minHeight: 0 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          m: 2,
        }}
      >
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === 0 ? (
          <>
            <SenderInfo />
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
 
              <Button onClick={handleNext}>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
            </Box>
          </>
        ) : activeStep === 1 ? (
          <>
            <Destination city={city} setCity={setCity} state={state} setState={setState} contact={contact} contacts={contacts} setContact={setContact} setContacts={setContacts} />
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
 
              <Button onClick={handleNext}>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
            </Box>
          </>
        ) : (
          <>
            <GoodsInfo />
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
 
              <Button onClick={handleNext}>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button>
            </Box>
          </>
        )}
      </Box>
    </SimpleBar>
  );
}
