import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ProductsBase = ({ data, title }) => {
  data.sort((a, b) => {
    const firstItemDiscount = a.price_before_sale - a.price_after_sale;
    const secondItemsDiscount = b.price_before_sale - b.price_after_sale;

    if (firstItemDiscount > secondItemsDiscount) {
      return -1;
    } else {
      return 1;
    }
  });

  return (
    <section style={{ padding: "20px 0" }}>
      <Typography
        variant="h5"
        color="#292b6e"
        fontSize="bold"
        sx={{ maxWidth: "90%", margin: "0 auto 24px" }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          maxWidth: "95%",
          marginLeft: "auto",
          justifyContent: "space-between",
          overflow: "auto",
          gap: "120px",
          "&::-webkit-scrollbar": {
            width: "0.1em",
            height: "5px",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(55, 85, 253, 0.9)",
            outline: "1px solid slategrey",
          },
        }}
      >
        {data.map(item => {
          const discount = item.price_before_sale - item.price_after_sale;

          return (
            <Box key={item.id}>
              <Box sx={{ width: "177px" }}>
                <Image
                  src={item.image}
                  width="177px"
                  height="176px"
                  alt={item.name}
                />
                <Typography variant="body2" sx={{ fontSize: "18px" }}>
                  {item.name}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: `${discount ? "#BA0829" : "#2D2F7D"}`,
                  fontSize: "24px",
                }}
              >
                EGP {item.price_after_sale}
                {discount && (
                  <Typography variant="caption" sx={{ fontSize: "16px" }}>
                    Save {discount}
                  </Typography>
                )}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </section>
  );
};

export default ProductsBase;
