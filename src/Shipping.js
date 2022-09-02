import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";
import SenderInfo from "./SenderInfo";
import GoodsInfo from "./GoodsInfo";
import Destination from "./Destination";
import SimpleBar from "simplebar-react";
import Agreement from "./Agreement";
import Review from "./Review";
import axios from "axios";
import stuff from "./config/stuff.json";
import { v4 as uuidv4 } from "uuid";

const steps = [
  "Sender Info",
  "Destination",
  "Goods Info",
  "Agreement",
  "Review",
];

export default function Shipping() {
  const [agree, setAgree] = React.useState(false);
  const [id, setID] = useState();
  useEffect(() => {
    setID(uuidv4());
  }, []);

  const [senderInfo, setSenderInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    customerID: "",
    email: "",
    phoneNumber: "",
  });

  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    address: "",
    customerID: "",
    email: "",
    phoneNumber: "",
  });
  const [contacts, setContacts] = useState([]);

  const [good, setGood] = useState({
    type: "",
    value: "",
    weight: "",
    insurance: "",
  });
  const [goods, setGoods] = useState([]);

  const [activeStep, setActiveStep] = React.useState(0);

  const submitOrder = async () => {
    handleNext()
    await axios.post(stuff.CONNECTION_URL, {
      id: id,
      city: city,
      state: state,
    });
    await axios.post(`${stuff.CONNECTION_URL}/tabs/Sender`, {
      ...senderInfo,
      orderID: id,
    });
    for (let item of goods) {
      await axios.post(`${stuff.CONNECTION_URL}/tabs/Goods`, {
        ...item,
        orderID: id,
      });
    }
    for (let receiver of contacts) {
      await axios.post(`${stuff.CONNECTION_URL}/tabs/Receivers`, {
        ...receiver,
        orderID: id,
      });
    }
    
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleAgreementPage = () => {
    handleNext();
    setAgree(false);
  };
  const handleAgreementPageBack = () => {
    handleBack();
    setAgree(false);
  };
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
            <SenderInfo senderInfo={senderInfo} setSenderInfo={setSenderInfo} />
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                disabled={
                  senderInfo.firstName.length === 0 ||
                  senderInfo.lastName.length === 0 ||
                  senderInfo.customerID.length === 0 ||
                  senderInfo.email.length === 0 ||
                  senderInfo.address.length === 0 ||
                  !/^[(]{0,1}[0-9]{3}[)]{0,1}[-s.]{0,1}[0-9]{3}[-s.]{0,1}[0-9]{4}$/.test(
                    senderInfo.phoneNumber
                  )
                }
                onClick={handleNext}
                color="primary"
              >
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </Box>
          </>
        ) : activeStep === 1 ? (
          <>
            <Destination
              city={city}
              setCity={setCity}
              state={state}
              setState={setState}
              contact={contact}
              contacts={contacts}
              setContact={setContact}
              setContacts={setContacts}
            />
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="primary"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>

              <Button
                disabled={
                  contacts.length === 0 ||
                  state.length === 0 ||
                  city.length === 0
                }
                onClick={handleNext}
                color="primary"
              >
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </Box>
          </>
        ) : activeStep === 2 ? (
          <>
            <GoodsInfo
              good={good}
              setGood={setGood}
              goods={goods}
              setGoods={setGoods}
            />
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="primary"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>

              <Button
                disabled={goods.length > 0 ? false : true}
                onClick={handleAgreementPage}
                color="primary"
              >
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </Box>
          </>
        ) : activeStep === 3 ? (
          <>
            <Agreement agree={agree} setAgree={setAgree} />
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="primary"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>

              <Button disabled={!agree} onClick={handleNext} color="primary">
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </Box>
          </>
        ) : activeStep === 4 ? (
          <>
            <Review
              senderInfo={senderInfo}
              goods={goods}
              contacts={contacts}
              city={city}
              state={state}
            />
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="primary"
                disabled={activeStep === 0}
                onClick={handleAgreementPageBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>

              <Button onClick={submitOrder} color="primary">
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Typography sx={{ m: 2 }} variant="h4">
              ORDER COMPLETED
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 600,
                p: 2,
              }}
            >
              <Typography variant="h6"sx={{ mt: 3, fontWeight:"bold" }}>Order ID: {id}</Typography>
              <Box sx={{ m: 1 }}>
                {goods.map((good, index) => {
                  return (
                    <Box key={good.uid} sx={{ mt: 4 }}>
                      <Typography sx={{ fontWeight:"bold" }}>Item Tracking #: {good.trackingID}</Typography>
                      <Typography>Type: {good.type}</Typography>
                      <Typography>Value: ${good.value}</Typography>
                      <Typography>Weight: {good.weight} kg</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </>
        )}
      </Box>
    </SimpleBar>
  );
}
