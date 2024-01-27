import React, { useState, useEffect } from "react";
import { Alert, Box, Container } from "@mui/material";
import Elbow from "./Elbow";
import ROSLIB from "roslib";

const Connection = () => {
  const [connected, setConnected] = useState(false);
  const [ros, setRos] = useState(null);
  const [elbowMessages, setElbowMessages] = useState([]);

  useEffect(() => {
    const initConnection = () => {
      const rosInstance = new ROSLIB.Ros({
        url: "ws://localhost:9090",
      });

      rosInstance.on("connection", () => {
        console.log("Connection established!");
        setConnected(true);
        setRos(rosInstance);
        subscribeToElbowTopic(rosInstance);
      });

      rosInstance.on(
        "close",
        () => {
          console.log("Connection is closed!");
          setConnected(false);

          // Try to reconnect every 3 seconds
          setTimeout(() => {
            try {
              rosInstance.connect("ws://localhost:9090");
            } catch (error) {
              console.log("Connection problem");
            }
          }, 3000);
        },
        [ros]
      );
    };

    const subscribeToElbowTopic = (rosInstance) => {
      if (rosInstance) {
        try {
          const elbowListener = new ROSLIB.Topic({
            ros: rosInstance,
            name: "/elbow",
            messageType: "std_msgs/Float32",
          });

          elbowListener.subscribe((message) => {
            console.log("Received message from /elbow topic:", message);
            setElbowMessages([message.data]);
          });

          console.log("Subscription to /elbow topic successful.");
        } catch (error) {
          console.error("Error during subscription to /elbow topic:", error);
        }
      } else {
        console.error("ROS connection not initialized.");
      }
    };
    console.log(elbowMessages);
    initConnection();
    return () => {
      if (ros) {
        ros.close();
      }
    };
  }, []);

  return (
    <Container maxWidth="md">
      <Alert
        className="text-center m-3"
        variant={connected ? "success" : "danger"}
      >
        {connected ? "Server Connected" : "Server Disconnected"}
      </Alert>

      <div>
        <Elbow messages={elbowMessages} />
        <Box fontSize={"35px"}>
          {" "}
          {JSON.stringify(elbowMessages) === "[4]" ? "true" : "false"}
        </Box>
      </div>
    </Container>
  );
};

export default Connection;
