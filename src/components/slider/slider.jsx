import React from "react";
import Carousel from "react-material-ui-carousel";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Slider = ({ options, items }) => {
  return (
    <Carousel
      NextIcon={<NavigateNextIcon sx={{ transform: "scale(2.5)" }} />}
      PrevIcon={<NavigateBeforeIcon sx={{ transform: "scale(2.5)" }} />}
      autoPlay={false}
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: "transparent",
          borderRadius: 0,
          color: "black",
          opacity: 1,
          margin: "0 60px",
        },
      }}
      {...options}
    >
      {items}
    </Carousel>
  );
};

export default Slider;
