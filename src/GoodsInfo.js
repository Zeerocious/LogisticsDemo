import { v4 as uuidv4 } from "uuid";
import SimpleBar from "simplebar-react";
import { InputAdornment, Button, Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Destination() {
  const [good, setGood] = useState({
    type: "",
    value: "",
    weight: "",
    insurance: "",
  });
  const [goods, setGoods] = useState([]);

  const addGood = (e) => {
    e.preventDefault();
    const { type, value, weight } = good;
    const formValid =
      type &&
      /^[0-9]*$/.test(weight) &&
      /^[0-9]{1,3}([0-9]{3})*(?:\.[0-9]{1,2})?$/.test(value);
    if (!formValid) {
      return;
    }
    setGoods((goods) => [
      ...goods,
      {
        id: uuidv4(),
        type,
        value,
        weight,
      },
    ]);
  };

  const deleteGood = (index) => {
    setGoods((goods) => goods.filter((_, i) => i !== index));
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
          Goods Info
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ m: 1 }} variant="h7">
            Add Item
          </Typography>
          <TextField
            onChange={(e) =>
              setGood((good) => ({
                ...good,
                type: e.target.value,
              }))
            }
            sx={{ m: 1 }}
            required
            label="Type"
          />
          <Box
            sx={{
              display: "flex",
            }}
          >
            <TextField
              sx={{ m: 1 }}
              label="Value"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              onChange={(e) =>
                setGood((good) => ({
                  ...good,
                  value: e.target.value,
                }))
              }
              required
            />
            <TextField
              sx={{ m: 1 }}
              label="Weight"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">kg</InputAdornment>
                ),
              }}
              onChange={(e) =>
                setGood((good) => ({
                  ...good,
                  weight: e.target.value,
                }))
              }
              required
            />
          </Box>
          <Button onClick={addGood}>Add Item</Button>
        </Box>
        <Typography sx={{ m: 1 }} variant="h7">
          Goods
        </Typography>
        <Box>
          {goods.map((good, index) => {
            return (
              <Box key={good.id}>
                <Typography>Type: {good.type}</Typography>
                <Typography>Value: ${good.value}</Typography>
                <Typography>Weight: {good.weight} kg</Typography>
                <Typography>
                  insurance: ${(good.value * 0.08).toFixed(2)}
                </Typography>
                <Button onClick={() => deleteGood(index)}>
                  Delete Receiver
                </Button>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
