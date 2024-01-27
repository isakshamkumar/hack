import React from "react";
import Connection from "../src/components/Connection";
import Navbar from "../src/components/Navbar/Index";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
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
        <Navbar />
        <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
