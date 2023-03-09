import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box sx={{ borderTop: "1px solid #ADADAD" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          padding: "20px 0",
          maxWidth: "90%",
          margin: "0 auto",
        }}
      >
        <Box sx={{ flex: 1 / 3 }}>
          <Typography variant="h6" fontWeight="22px">
            Active Trending
          </Typography>
          <Typography variant="body1">Men</Typography>
          <Typography variant="body1">Women</Typography>
          <Typography variant="body1">Kids</Typography>
        </Box>
        <Box sx={{ flex: 2 / 3 }}>
          <Typography variant="h6" fontWeight="22px">
            About Us
          </Typography>
          <Typography variant="body1">About Company</Typography>
          <Typography variant="body1">Connect Us</Typography>
          <Typography variant="body1">Our Branches</Typography>
        </Box>
      </Box>

      <Typography
        variant="body2"
        textAlign="center"
        padding="20px 0"
        borderTop="1px solid #ADADAD"
        fontWeight="12px"
        color="#2E2E2E"
      >
        © 2022 Time to Code - A Project Built with Next.js
      </Typography>

      {/* <p> © 2022 Time to Code - A Project Built with Next.js </p> */}
    </Box>
  );
};
