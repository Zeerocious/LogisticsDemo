import { Button, Box, TextField, Typography } from "@mui/material";
import React from "react";

export default function SenderInfo(props) {
  const { senderInfo, setSenderInfo } = props;
  const { firstName, lastName, address, email, idNumber, phoneNumber } =
    senderInfo;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        mt: 5,
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 500,
          p: 2,
        }}
      >
        <Typography sx={{ m: 1 }} variant="h5">
          SENDER INFO
        </Typography>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
            onChange={(e) => {
              setSenderInfo((senderInfo) => ({
                ...senderInfo,
                firstName: e.target.value,
              }));
            }}
            sx={{ m: 1 }}
            required
            label="First Name"
            defaultValue={firstName}
          />
          <TextField
            onChange={(e) => {
              setSenderInfo((senderInfo) => ({
                ...senderInfo,
                lastName: e.target.value,
              }));
            }}
            sx={{ m: 1 }}
            required
            label="Last Name"
            defaultValue={lastName}
          />
        </Box>
        <TextField
          onChange={(e) => {
            setSenderInfo((senderInfo) => ({
              ...senderInfo,
              address: e.target.value,
            }));
          }}
          sx={{ m: 1 }}
          required
          label="Address"
          defaultValue={address}
        />
        <TextField
          onChange={(e) => {
            setSenderInfo((senderInfo) => ({
              ...senderInfo,
              email: e.target.value,
            }));
          }}
          sx={{ m: 1 }}
          required
          label="Email"
          defaultValue={email}
        />
        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
            onChange={(e) => {
              setSenderInfo((senderInfo) => ({
                ...senderInfo,
                idNumber: e.target.value,
              }));
            }}
            sx={{ m: 1 }}
            required
            label="ID Number"
            defaultValue={idNumber}
          />
          <TextField
            onChange={(e) => {
              setSenderInfo((senderInfo) => ({
                ...senderInfo,
                phoneNumber: e.target.value,
              }));
            }}
            sx={{ m: 1 }}
            required
            label="Phone Number"
            defaultValue={phoneNumber}
          />
        </Box>
      </Box>
      <Button sx={{ maxWidth: 200 }} variant="contained" component="label">
          Upload File
          <input type="file" hidden />
        </Button>
    </Box>
  );
}
