import { Stack, Box, Typography } from "@mui/material";
import Image from "next/image";

const BrandsItem = ({ da }) => {
  return (
    <Stack direction="column" key={da.id} alignItems="center" spacing={1}>
      <Box
        sx={{
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          border: "4px solid #0e0056",
          overflow: "hidden",
          backgroundColor: "#2D2F7D",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={da.image} width="89px" height="92px" alt="brand" />
      </Box>
      <Typography variant="body1" fontSize="bold">
        Up to {da.sale_percentage}%
      </Typography>
    </Stack>
  );
};

export default BrandsItem;
