import { Typography, Box, Button } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      }}
    >
      <Button href="/" >
        <Typography color="primary" variant="header">THERES NOTHING HERE.</Typography>
      </Button>
    </Box>
  );
}