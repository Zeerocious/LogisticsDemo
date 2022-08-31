import {
  Step,
  Stepper,
  TextField,
  Box,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import Data from "./Data";

const steps = ["Access", "Data"];

export default function Admin(props) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleLogin = () => {
    setUsername(null)
    setPassword(null)
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleLogout = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const {ADMINCODE} = props;
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <SimpleBar style={{ height: "100%", minHeight: 0 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
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
            <Typography sx={{ m: 1 }} variant="h5">
              ADMIN ACCESS
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 500,
                p: 2,
              }}
            >
              <TextField
                sx={{ m: 1 }}
                /*onChange={(e) => {
                setUsername(e.target.value);
                }} */
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                label="Username"
              />
              <TextField
                sx={{ m: 1 }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                label="Password"
                type="password"
              />
            </Box>
            <Button
              sx={{ maxWidth: 100 }}
              variant="contained"
              component="label"
              onClick={username === "admin" && password === ADMINCODE ? handleLogin : null}

            >
              Login
            </Button>
          </>
        ) : (
          <>
            <Data />
            <Button
              sx={{ width: 100 }}
              variant="contained"
              component="label"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        )}
      </Box>
    </SimpleBar>
  );
}
