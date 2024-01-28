import React, { useState } from "react";
import SideDrawer from "../SideDrawer/Index";
import {
  Menu,
  Home,
  LockClock,
  Assignment,
  LocalHospital,
  Person,
  Settings,
} from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Drawer, Stack, Box } from "@mui/material";
import "../../index.css";
import { useLocation } from "react-router-dom";
const Index = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const params = useLocation();
  console.log(params);
  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"32px"}
        width={"fit-content"}
        alignItems={"flex-start"}
        paddingX={"15px"}
        height={"90vh"}
        sx={{
          backgroundColor: "#FFEDFC",
        }}
      >
        <IconButton
          size="large"
          aria-haspopup="true"
          color="inherit"
          sx={{
            display: { xs: "flex", lg: "flex" },
            backgroundColor: params.pathname === "/" ? "#CAA0C3" : "#FFEDFC",
          }}
        >
          <Home
            height={54}
            width={54}
            sx={{
              color: params.pathname === "/" ? "white" : "black",
            }}
          />
        </IconButton>
        <IconButton
          size="large"
          aria-haspopup="true"
          color="inherit"
          sx={{
            display: { xs: "flex", lg: "flex" },
            backgroundColor:
              params.pathname === "/sessions" ? "#CAA0C3" : "#FFEDFC",
          }}
        >
          <LockClock
            height={54}
            width={54}
            sx={{
              color: params.pathname === "/sessions" ? "white" : "black",
            }}
          />
        </IconButton>
        <IconButton
          size="large"
          aria-haspopup="true"
          color="inherit"
          sx={{
            display: { xs: "flex", lg: "flex" },
            backgroundColor:
              params.pathname === "/doctors" ? "#CAA0C3" : "#FFEDFC",
          }}
        >
          <LocalHospital
            height={54}
            width={54}
            sx={{
              color: params.pathname === "/doctors" ? "white" : "black",
            }}
          />
        </IconButton>
        <IconButton
          size="large"
          aria-haspopup="true"
          color="inherit"
          sx={{
            display: { xs: "flex", lg: "flex" },
            backgroundColor:
              params.pathname === "/excercise" ? "#CAA0C3" : "#FFEDFC",
          }}
        >
          <Assignment
            height={54}
            width={54}
            sx={{
              color: params.pathname === "/excercise" ? "white" : "black",
            }}
          />
        </IconButton>
        <IconButton
          size="large"
          aria-haspopup="true"
          color="inherit"
          sx={{
            display: { xs: "flex", lg: "flex" },
            backgroundColor:
              params.pathname === "/profile" ? "#CAA0C3" : "#FFEDFC",
          }}
        >
          <Person
            height={54}
            width={54}
            sx={{
              color: params.pathname === "/profile" ? "white" : "black",
            }}
          />
        </IconButton>
        <IconButton
          size="large"
          aria-haspopup="true"
          color="inherit"
          sx={{
            display: { xs: "flex", lg: "flex" },
            backgroundColor:
              params.pathname === "/settings" ? "#CAA0C3" : "#FFEDFC",
          }}
        >
          <Settings
            height={54}
            width={54}
            sx={{
              color: params.pathname === "/settings" ? "white" : "black",
            }}
          />
        </IconButton>
      </Box>

      <Drawer
        anchor={"left"}
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
        sx={{
          ".MuiDrawer-paper": {
            borderBottomRightRadius: "26px",
            borderBottomLeftRadius: "26px",
            width: "30%",
            height: "100%",
          },
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            onClick={() => setIsDrawerOpen(false)}
            style={{ marginRight: "3%" }}
          >
            <Menu style={{ height: "24px", width: "24px", padding: "12px" }} />
          </IconButton>
        </Stack>

        <Stack
          padding={""}
          alignItems={"flex-start"}
          paddingBottom="40%"
          sx={{
            overflowY: "scroll",
          }}
        ></Stack>
      </Drawer>
    </>
  );
};
export default Index;
