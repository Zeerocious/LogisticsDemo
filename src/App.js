import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { styled } from "@mui/material";
import Admin from "./Admin";
import Header from "./Header";
import NotFound from "./NotFound";
import Shipping from "./Shipping";
import stuff from "./config/stuff.json";

function App() {
  return (
    <BrowserRouter>
      <Parent>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<Header />} />
          <Route
            exact
            path="/shipping"
            element={
              <>
                <Header />
                <Shipping />
              </>
            }
          />
          <Route
            exact
            path="/admin"
            element={
              <>
                <Header />
                <Admin ADMINCODE={stuff.ADMINCODE} />
              </>
            }
          />
        </Routes>
      </Parent>
    </BrowserRouter>
  );
}

export default App;

const Parent = styled((props) => <div {...props} />)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
