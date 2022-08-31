import {Box, Typography } from "@mui/material";

export default function Data() {
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
          DATABASE
        </Typography>

    </Box>
  );
}
