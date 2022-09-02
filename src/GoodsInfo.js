import {
  InputAdornment,
  Button,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Destination(props) {
  const { good, setGood, goods, setGoods } = props;

  const addGood = (e) => {
    e.preventDefault();
    const { orderID, type, value, weight } = good;
    const formValid =
      type &&
      /^[0-9]*$/.test(weight) &&
      /^[0-9]{1,3}([0-9]{3})*(?:\.[0-9]{1,2})?$/.test(value);
    if (!formValid) {
      return;
    }
    const d = new Date();
    setGoods((goods) => [
      ...goods,
      {
        uid: uuidv4(),
        trackingID: d.valueOf(),
        type,
        value,
        weight,
        orderID,
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
            defaultValue={good.type}
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
              defaultValue={good.value}
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
              defaultValue={good.weight}
            />
          </Box>
          <Button sx={{m:2}} component="label">
            <input type="file" hidden />
            Upload Pictures (2-5)
          </Button>
          <Button variant="contained" color="success" onClick={addGood}>
            Add Item
          </Button>
        </Box>
        <Typography sx={{ mt: 5, fontWeight: "medium" }} variant="h5">
          {goods.length > 1 ? "Goods" : "Good"}
        </Typography>
        <Box>
          {goods.map((good, index) => {
            return (
              <Box key={good.uid} sx={{ mt: 4 }}>
                <Typography>Type: {good.type}</Typography>
                <Typography>Value: ${good.value}</Typography>
                <Typography>Weight: {good.weight} kg</Typography>
                <Typography>
                  insurance: ${(good.value * 0.08).toFixed(2)}
                </Typography>
                <Button onClick={() => deleteGood(index)} color={"error"}>
                  Delete Good
                </Button>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
