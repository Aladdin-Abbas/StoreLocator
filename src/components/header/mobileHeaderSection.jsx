import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import StoreLocatorIcon from "../../../public/images/icons/store-locator.svg";
import ProfileIcon from "../../../public/images/icons/profile.svg";
import BasketIcon from "../../../public/images/icons/basket.svg";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import {
  Box,
  Divider,
  Drawer,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

const MobileHeaderSection = () => {
  const [open, setOpen] = useState(false);

  const mobileMenuItems = [
    "Top Deals",
    "Deals of the Day",
    "Men",
    "Women",
    "Kids",
    "New",
    "Brands",
    "Sports",
    "Accessories",
  ];

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setOpen(open);
  };

  return (
    <>
      <Box
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        display={{ xs: "flex", md: "none" }}
      >
        <Box
          display={"flex"}
          alignItems="center"
          gap={2}
          padding="12px 0"
          flex={1}
          width={"90%"}
          justifyContent="space-between"
        >
          <IconButton
            sx={{ p: "10px" }}
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Box display={"flex"} alignItems="center" gap={2}>
            <Image src={ProfileIcon} alt="profile" />
            <Image src={BasketIcon} alt="basket" />
          </Box>
        </Box>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "90%",
            borderRadius: "15px",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "Search" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
      <Drawer
        sx={{ display: { xs: "block", md: "none" } }}
        PaperProps={{ style: { width: "80%" } }}
        //from which side the drawer slides in
        anchor="left"
        //if open is true --> drawer is shown
        open={open}
        //function that is called when the drawer should close
        onClose={toggleDrawer(false)}
      >
        {/* The inside of the drawer */}
        <Box
          sx={{
            height: 1,
            backgroundColor: "#F7F7F7",
          }}
        >
          {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
          <IconButton sx={{ p: 2 }} onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>

          <Divider />

          <Box display={"flex"} gap={1} sx={{ p: 2 }}>
            <Image src={StoreLocatorIcon} alt="store" />
            <Typography>Store Locator</Typography>
          </Box>

          <Divider sx={{ mb: 2 }} />

          <Box sx={{ mb: 2 }}>
            {mobileMenuItems.map(item => {
              return (
                <ListItemButton key={item}>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        variant="body2"
                        style={{ fontWeight: "bold" }}
                      >
                        {item}
                      </Typography>
                    }
                  />
                </ListItemButton>
              );
            })}

            <ListItemButton>
              <ListItemText
                disableTypography
                primary={
                  <Typography variant="body2" style={{ fontWeight: "bold" }}>
                    Sports
                  </Typography>
                }
              />
            </ListItemButton>

            <ListItemButton>
              <ListItemText
                disableTypography
                primary={
                  <Typography variant="body2" style={{ fontWeight: "bold" }}>
                    Accessories
                  </Typography>
                }
              />
            </ListItemButton>

            <ListItemButton>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    variant="body2"
                    style={{ fontWeight: "bold", color: "#B88521" }}
                  >
                    Sale
                  </Typography>
                }
              />
            </ListItemButton>

            <ListItemButton sx={{ marginTop: "40px" }}>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    variant="body2"
                    style={{
                      fontWeight: "bold",
                      color: "#2D2F82",
                      fontFamily: "'Cairo', sans-serif",
                    }}
                  >
                    العربية
                  </Typography>
                }
              />
            </ListItemButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileHeaderSection;
