import { Box, Typography, TextField } from "@mui/material";

export default function Review(props) {
  const { goods, contacts, city, state, senderInfo } = props;
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
      <Typography sx={{ m: 1 }} variant="h4">
        REVIEW
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 500,
          p: 2,
        }}
      >
        <Typography sx={{ m: 1 }} variant="h6">
          SENDER INFO
        </Typography>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
          focused
          color='white'
            sx={{ m: 1 }}
            id="outlined-read-only-input"
            label="First Name"
            defaultValue={senderInfo.firstName}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
          focused
          color='white'
            sx={{ m: 1 }}
            id="outlined-read-only-input"
            label="Last Name"
            defaultValue={senderInfo.lastName}
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
        <TextField
        focused
        color='white'
          sx={{ m: 1 }}
          id="outlined-read-only-input"
          label="Address"
          defaultValue={senderInfo.address}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
        focused
        color='white'
          sx={{ m: 1 }}
          id="outlined-read-only-input"
          label="Email"
          defaultValue={senderInfo.email}
          InputProps={{
            readOnly: true,
          }}
        />
        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
          focused
          color='white'
            sx={{ m: 1 }}
            id="outlined-read-only-input"
            label="ID Number"
            defaultValue={senderInfo.idNumber}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
          focused
          color='white'
            sx={{ m: 1 }}
            id="outlined-read-only-input"
            label="Phone Number"
            defaultValue={senderInfo.phoneNumber}
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>

        <Typography sx={{ m: 1 }} variant="h6">
          DESTINATION
        </Typography>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
          focused
          color='white'
            sx={{ m: 1 }}
            id="outlined-read-only-input"
            label="City"
            defaultValue={city}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            focused
            color='white'
            sx={{ m: 1}}
            id="outlined-read-only-input"
            label="State"
            defaultValue={state}
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
        <Typography sx={{ m: 1, mt: 2}} variant="h6">
          {contacts.length > 1 ? "Receivers" : "Receiver"}
        </Typography>

        <Box sx={{ m:1}}>
          {contacts.map((contact, index) => {
            return (
              <Box key={contact.id} sx={{ mt: 2 }}>
                <Typography>
                  Name: {contact.firstName} {contact.lastName}
                </Typography>
                <Typography>Address: {contact.address}</Typography>
                <Typography>Email: {contact.email}</Typography>
                <Typography>ID Number: {contact.idNumber}</Typography>
                <Typography>Phone Number: {contact.phoneNumber}</Typography>
              </Box>
            );
          })}
        </Box>
        <Typography sx={{ m: 1, mt: 2 }} variant="h6">
            {goods.length > 1 ? "Goods" : "Good"}
        </Typography>
        <Box sx={{ m:1}}>
          {goods.map((good, index) => {
            return (
              <Box key={good.id}>
                <Typography>Type: {good.type}</Typography>
                <Typography>Value: ${good.value}</Typography>
                <Typography>Weight: {good.weight} kg</Typography>
                <Typography>
                  insurance: ${(good.value * 0.08).toFixed(2)}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
