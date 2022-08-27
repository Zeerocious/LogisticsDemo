import { Box, TextField, Typography } from "@mui/material";
import React from "react";

export default function SenderInfo() {
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
          <TextField sx={{ m: 1 }} required label="First Name" />
          <TextField sx={{ m: 1 }} required label="Last Name" />
        </Box>
        <TextField sx={{ m: 1 }} required label="Address 1" />
        <TextField sx={{ m: 1 }} label="Address 2 (Apt, Suite, Unit)" />
        <TextField sx={{ m: 1 }} required label="Email" />
        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField sx={{ m: 1 }} required label="ID Number" />
          <TextField sx={{ m: 1 }} required label="Phone Number" />
        </Box>
      </Box>
    </Box>
  );
}
