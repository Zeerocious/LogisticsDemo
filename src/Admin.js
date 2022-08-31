import { TextField, Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Data from "./Data";

export default function Admin(props) {
  const ADMINCODE = props
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  console.log(ADMINCODE, password)
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Typography sx={{ m: 1}} variant="h5">
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
        
        <TextField sx={{ m: 1 }} 
        /*onChange={(e) => {
          setUsername(e.target.value);
        }} */
        label="Username" />
        <TextField sx={{ m: 1 }} 
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        label="Password" type="password" />
        <Button variant="contained" component="label" onClick={password === ADMINCODE ? console.log(true) : console.log(false) }>Enter</Button>
      </Box>

    </Box>
  );
}
