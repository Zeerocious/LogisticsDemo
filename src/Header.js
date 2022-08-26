import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";

export default function Header() {
    return (<AppBar position="static" color="secondary" enableColorOnDark>
    <Toolbar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Typography variant="h2">SHIPPING COMPANY</Typography>
        <Box sx={{ display: "flex" }}>
          <Button href="/user" sx={{ mr: 1, backgroundColor: "#345522" }} size="large">
            <Typography sx={{color: "tertiary.main"}} variant="h3">
              Ship a Package
            </Typography>
          </Button>
          <Button href="/admin" sx={{ mr: 1, backgroundColor: "#345522" }} size="large">
            <Typography color="primary" variant="h3">
              Admin
            </Typography>
          </Button>
        </Box>
      </Box>
    </Toolbar>
  </AppBar>
        );
}