import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Box, TextField, styled } from "@mui/material";
import Admin from "./Admin";
import Header from "./Header";
import NotFound from "./NotFound";
import User from "./User";

function App() {
  return (
    <BrowserRouter>
    <Parent>
      <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <User />
              </>
            }
          />
          <Route
            exact
            path="/user"
            element={
              <>
                <Header />
                <User />
              </>
            }
          />
          <Route
            exact
            path="/admin"
            element={
              <>
                <Header />
                <Admin />
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
