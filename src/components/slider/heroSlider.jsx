import { Paper } from "@mui/material";
import Image from "next/image";
import React from "react";
import Slider from "./slider";

const HeroSlider = ({ data, priority }) => {
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
    indicatorContainerProps: {
      style: {
        marginTop: "-70px",
      },
    },
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

  return (
    <Slider
      options={options}
      items={data.map((item, i) => (
        <Paper key={item.id} sx={{ height: "60vh", position: "relative" }}>
          <Image
            src={item.image}
            layout="fill"
            priority={priority}
            alt="slider"
          />
        </Paper>
      ))}
    />
  );
};

export default HeroSlider;
