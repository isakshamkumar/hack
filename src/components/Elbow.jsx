import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, Container } from "@mui/material";

const Elbow = ({ messages }) => {
  const [goodGoingCount, setGoodGoingCount] = useState(0);

  console.log(messages[0], "gu");

  useEffect(() => {
    if (messages[0] >= 40 && messages[0] <= 70) {
      setGoodGoingCount((prevCount) => prevCount + 1);
    }
  }, [messages]);

  return (
    <Container maxWidth="md">
      <Typography variant="h1" gutterBottom>
        Elbow Exercise
      </Typography>

      <List>
        {messages.map((message, index) => (
          <ListItem key={index}>
            <Typography fontSize={"35px"} variant="body1">
              {message}
            </Typography>
          </ListItem>
        ))}
      </List>
      {messages[0] >= 40 && messages[0] <= 70 ? (
        <Typography
          fontFamily={"poppins"}
          fontSize={"35px"}
          sx={{ color: "green", fontWeight: "600" }}
        >
          Good Going
        </Typography>
      ) : (
        <Typography
          fontFamily={"poppins"}
          fontSize={"35px"}
          sx={{ color: "red", fontWeight: "600" }}
        >
          Correct Your Angle
        </Typography>
      )}
      <Typography fontSize={"35px"} variant="body1">
        Excersize count : {goodGoingCount}/15
      </Typography>
      <Typography fontSize={"20px"} color={"yellowgreen"}>
        {goodGoingCount === 15 ? "Well Done Champ !!" : " "}
      </Typography>
    </Container>
  );
};

export default Elbow;
