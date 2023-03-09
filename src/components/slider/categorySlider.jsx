import { Typography } from "@mui/material";
import React from "react";
import Slider from "./slider";
import { multipleItemsGenerator } from "../../utils/utils";
import CategorySliderItem from "./categorySliderItems";

const CategorySlider = ({ data }) => {
  const options = {
    animation: "slide",
    cycleNavigation: true,
    timeout: 300,
    indicators: false,
  };

  const items = multipleItemsGenerator(data, 4, CategorySliderItem);

  return (
    <section style={{ padding: "20px 0" }}>
      <Typography
        variant="h5"
        color="#292b6e"
        fontSize="bold"
        sx={{ maxWidth: "90%", margin: "0 auto 24px" }}
      >
        Main Categories
      </Typography>
      <Slider options={options} items={items} />
    </section>
  );
};

export default CategorySlider;
