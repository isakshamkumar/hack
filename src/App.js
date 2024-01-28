import React from "react";
import Connection from "../src/components/Connection";
import Navbar from "../src/components/Navbar/Index";
import { createTheme, Grid, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./index.css";
import Header from "./components/Header";
import Elbow from "./components/Elbow";

function App() {
  const THEME = createTheme({
    typography: {
      fontFamily: `"Poppins", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={THEME}>
        <Header />
        <Grid container>
          {/* Navbar Grid Layout */}
          <Grid item lg={"auto"}>
            {/* Content for the first column (1 of 3) */}
            <Navbar />
          </Grid>
          <Grid item lg={"11"}>
            {/* Content for the second column (2 of 3) */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/connection" element={<Connection />} />
              <Route path="/elbow" element={<Elbow />} />
            </Routes>
          </Grid>
        </Grid>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
