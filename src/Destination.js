import { v4 as uuidv4 } from "uuid";
import { Button, Box, TextField, Typography } from "@mui/material";
import React from "react";

export default function Destination(props) {
  const {
    city,
    setCity,
    state,
    setState,
    contact,
    contacts,
    setContact,
    setContacts,
  } = props;

  const addContact = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      address,
      address2,
      idNumber,
      email,
      phoneNumber,
    } = contact;
    const formValid =
      firstName &&
      lastName &&
      idNumber &&
      email &&
      address &&
      /^[(]{0,1}[0-9]{3}[)]{0,1}[-s.]{0,1}[0-9]{3}[-s.]{0,1}[0-9]{4}$/.test(
        phoneNumber
      );
    if (!formValid) {
      return;
    }
    setContacts((contacts) => [
      ...contacts,
      {
        id: uuidv4(),
        address2,
        firstName,
        lastName,
        address,
        idNumber,
        email,
        phoneNumber,
      },
    ]);
  };

  const deleteContact = (index) => {
    setContacts((contacts) => contacts.filter((_, i) => i !== index));
  };
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
          DESTINATION
        </Typography>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
            sx={{ m: 1 }}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            required
            label="City"
            defaultValue={city}
          />
          <TextField
            sx={{ m: 1 }}
            onChange={(e) => {
              setState(e.target.value);
            }}
            required
            label="State"
            defaultValue={state}
          />
        </Box>
        <Box sx={{display: "flex", flexDirection: "column" }}>
          <Typography sx={{ m: 1 }} variant="h7">
            Add Receiver
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <TextField
              onChange={(e) => {
                setContact((contact) => ({
                  ...contact,
                  firstName: e.target.value,
                }));
              }}
              sx={{ m: 1 }}
              required
              label="First Name"
              defaultValue={contact.firstName}
            />
            <TextField
              onChange={(e) =>
                setContact((contact) => ({
                  ...contact,
                  lastName: e.target.value,
                }))
              }
              sx={{ m: 1 }}
              required
              label="Last Name"
              defaultValue={contact.lastName}
            />
          </Box>
          <TextField
            onChange={(e) =>
              setContact((contact) => ({
                ...contact,
                address: e.target.value,
              }))
            }
            sx={{ m: 1 }}
            required
            label="Address 1"
            defaultValue={contact.address}
          />
          <TextField
            onChange={(e) =>
              setContact((contact) => ({
                ...contact,
                address2: e.target.value,
              }))
            }
            sx={{ m: 1 }}
            label="Address 2 (Apt, Suite, Unit)"
            defaultValue={contact.address2}
          />
          <TextField
            onChange={(e) =>
              setContact((contact) => ({
                ...contact,
                email: e.target.value,
              }))
            }
            sx={{ m: 1 }}
            required
            label="Email"
            defaultValue={contact.email}
          />
          <Box
            sx={{
              display: "flex",
            }}
          >
            <TextField
              onChange={(e) =>
                setContact((contact) => ({
                  ...contact,
                  idNumber: e.target.value,
                }))
              }
              sx={{ m: 1 }}
              required
              label="ID Number"
              defaultValue={contact.idNumber}
            />
            <TextField
              onChange={(e) =>
                setContact((contact) => ({
                  ...contact,
                  phoneNumber: e.target.value,
                }))
              }
              sx={{ m: 1 }}
              required
              label="Phone Number"
              defaultValue={contact.phoneNumber}
            />
          </Box>
          <Button onClick={addContact} variant="contained" >Add Receiver</Button>
        </Box>
        <Typography sx={{ mt:5, fontFamily: "roboto" }} variant="h5">
          Receiver
        </Typography>

        <Box>
          {contacts.map((contact, index) => {
            return (
              <Box key={contact.id} sx={{mt: 4}}>
                <Typography>
                  Name: {contact.firstName} {contact.lastName}
                </Typography>
                <Typography>Address 1: {contact.address}</Typography>
                <Typography>Address 2: {contact.address2}</Typography>
                <Typography>Email: {contact.email}</Typography>
                <Typography>ID Number: {contact.idNumber}</Typography>
                <Typography>Phone Number: {contact.phoneNumber}</Typography>
                <Button sx={{mt: 0.8}} onClick={() => deleteContact(index)} variant="contained" color="error">
                  Delete
                </Button>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
