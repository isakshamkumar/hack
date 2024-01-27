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
const Index = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };
  const params = URLSearchParams;
  return (
    <>
      <SideDrawer
        openDrawer={openDrawer}
        setOpenDrawer={() => setOpenDrawer(false)}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"32px"}
        marginLeft={"15px"}
      >
        <Box display={"flex"} gap={"20px"} alignItems={"center"}>
          <IconButton
            size="large"
            aria-haspopup="true"
            onClick={() => toggleDrawer(true)}
            color="inherit"
            sx={{ display: { xs: "flex", lg: "flex" } }}
          >
            <Menu height={54} width={54} fill={"blue"} />
          </IconButton>
          <Typography fontSize={"26px"} fontWeight={600}>
            Physio-Fit
          </Typography>
        </Box>
        <IconButton
          size="large"
          aria-haspopup="true"
          onClick={() => toggleDrawer(true)}
          color="inherit"
          sx={{ display: { xs: "flex", lg: "flex" } }}
        >
          <Home height={54} width={54} fill={"blue"} />
        </IconButton>
        <IconButton
          size="large"
          aria-haspopup="true"
          onClick={() => toggleDrawer(true)}
          color="inherit"
          sx={{ display: { xs: "flex", lg: "flex" } }}
        >
          <LockClock height={54} width={54} fill={"blue"} />
        </IconButton>
        <IconButton
          size="large"
          aria-haspopup="true"
          onClick={() => toggleDrawer(true)}
          color="inherit"
          sx={{ display: { xs: "flex", lg: "flex" } }}
        >
          <LocalHospital height={54} width={54} fill={"blue"} />
        </IconButton>
        <IconButton
          size="large"
          aria-haspopup="true"
          onClick={() => toggleDrawer(true)}
          color="inherit"
          sx={{ display: { xs: "flex", lg: "flex" } }}
        >
          <Assignment height={54} width={54} fill={"blue"} />
        </IconButton>
        <IconButton
          size="large"
          aria-haspopup="true"
          onClick={() => toggleDrawer(true)}
          color="inherit"
          sx={{ display: { xs: "flex", lg: "flex" } }}
        >
          <Person height={54} width={54} fill={"blue"} />
        </IconButton>
        <IconButton
          size="large"
          aria-haspopup="true"
          onClick={() => toggleDrawer(true)}
          color="inherit"
          sx={{ display: { xs: "flex", lg: "flex" } }}
        >
          <Settings height={54} width={54} fill={"blue"} />
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
