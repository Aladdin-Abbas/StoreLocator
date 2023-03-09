import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const ShopNow = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        maxWidth: "90%",
        justifyContent: "space-between",
        // height: "350px",
        margin: "0 auto",
        gap: { md: "20px", xs: "10px" },
        padding: "20px 0",
      }}
    >
      <Box sx={{ flex: { md: 1 / 2, xs: "1" } }}>
        <Image
          src="/images/shop1.png"
          width="624px"
          height="221px"
          layout="responsive"
          alt="shop now"
        />
      </Box>
      <Box sx={{ flex: { md: 1 / 2, xs: "1" } }}>
        <Image
          src="/images/shop2.png"
          width="624px"
          height="221px"
          layout="responsive"
          alt="shop now"
        />
      </Box>
    </Box>
  );
};

export default ShopNow;
