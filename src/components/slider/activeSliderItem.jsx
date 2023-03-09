import { Box } from "@mui/material";
import Image from "next/image";

const ActiveSliderItem = ({ da }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        // border: "4px solid blue",
      }}
    >
      <Image
        src={da.image}
        layout="responsive"
        height="160px"
        width="350px"
        alt="active"
      />
    </Box>
  );
};

export default ActiveSliderItem;
