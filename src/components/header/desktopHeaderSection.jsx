import { Box, IconButton, InputBase, Paper, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import StoreLocatorIcon from "../../../public/images/icons/store-locator.svg";
import ProfileIcon from "../../../public/images/icons/profile.svg";
import BasketIcon from "../../../public/images/icons/basket.svg";

const DesktopHeaderSection = () => {
  const desktopMenuItems = [
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
  return (
    <>
      <Box
        alignItems="center"
        justifyContent="space-between"
        padding="25px"
        maxWidth="1225px"
        margin="0 auto"
        display={{ xs: "none", md: "flex" }}
      >
        <Box display={"flex"} gap={1}>
          <Image src={StoreLocatorIcon} alt="store" />
          <Typography>Store Locator</Typography>
        </Box>

        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "50%",
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

        <Box display={"flex"} alignItems="center" gap={2}>
          <Typography color="#2D2F82" fontFamily="'Cairo', sans-serif">
            العربية
          </Typography>
          <Image src={ProfileIcon} alt="profile" />
          <Image src={BasketIcon} alt="basket" />
        </Box>
      </Box>

      <Box bgcolor="black" display={{ xs: "none", md: "block" }}>
        <Box
          display="flex"
          gap={2}
          maxWidth="1225px"
          margin="0 auto"
          padding="12px 25px"
        >
          {desktopMenuItems.map(item => {
            return (
              <Link href="#" key={item}>
                <Typography color="white">{item}</Typography>
              </Link>
            );
          })}
          <Link href="#">
            <Typography color="#FFD800">Sale</Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default DesktopHeaderSection;
