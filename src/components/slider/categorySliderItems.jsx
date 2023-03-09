import { Stack, Box, Typography } from "@mui/material";
import Image from "next/image";

const CategorySliderItem = ({ da }) => {
  return (
    <Stack direction="column" key={da.id} alignItems="center" spacing={1}>
      <Box
        sx={{
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          // border: "4px solid blue",
          overflow: "hidden",
        }}
      >
        <Image src={da.image} width="140px" height="140px" alt="category" />
      </Box>
      <Typography variant="body1" fontSize="bold">
        {da.name}
      </Typography>
    </Stack>
  );
};

export default CategorySliderItem;
