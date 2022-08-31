import { Box, Typography } from "@mui/material";

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
      <Typography sx={{ m: 1 }} variant="h5">
        DATABASE
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: 800,
          height: 500,
          m:3,
        }}
      >
        <iframe
        style={{border:"none"}}
          title="Logistic Demo"
          width="100%"
          height="100%"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR6pFGBujiJ8WPZILvAQEW7RrvRRo9JwlNkt-SvflOixiwvQuYt_l1Ms45Xkn49u08U5N8pKELi9_Y6/pubhtml?widget=true&amp;headers=false"
        ></iframe>
      </Box>
    </Box>
  );
}
