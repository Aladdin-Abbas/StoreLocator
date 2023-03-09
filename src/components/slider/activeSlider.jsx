import React from "react";
import { multipleItemsGenerator } from "../../utils/utils";
import ActiveSliderItem from "./activeSliderItem";
import Slider from "./slider";

const ActiveSlider = ({ data }) => {
  //   const options = {
  //     animation: "slide",
  //     cycleNavigation: true,
  //     timeout: 300,
  //   };
  const options = {
    indicatorIconButtonProps: {
      style: {
        zIndex: 100,
        marginTop: "-20px",
        width: "10px",
        height: "10px",
        backgroundColor: "white",
        borderRadius: "50%",
        marginLeft: "20px",
      },
    },
    // indicatorContainerProps: {
    //   style: { marginTop: "-70px" },
    // },
    activeIndicatorIconButtonProps: {
      style: {
        borderRadius: "20px",
        backgroundColor: "white",
        width: "60px",
        height: "9px",
      },
    },
    IndicatorIcon: <span></span>,
  };

  const items = multipleItemsGenerator(data, 2, ActiveSliderItem, {
    gap: "0px",
    justifyContent: "initial",
    maxWidth: "100%",
    overflow: "hidden",
    flexDirection: { xs: "column", md: "row" },
  });

  return <Slider options={options} items={items} />;
};

export default ActiveSlider;
