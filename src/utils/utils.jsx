import { Box } from "@mui/material";

export const multipleItemsGenerator = (
  data,
  itemsNum,
  SliderItem,
  boxStyles
) => {
  const outputItems = data.length > itemsNum ? itemsNum : data.length;
  const items = [];

  for (let i = 0; i < data.length; i += outputItems) {
    if (i % outputItems === 0) {
      items.push(
        <Box
          display="flex"
          justifyContent={{ md: "center", xs: "space-between" }}
          maxWidth={"80%"}
          margin="0 auto"
          key={data[i].id}
          gap={{ md: "15%", xs: "2px" }}
          overflow="auto"
          {...boxStyles}
        >
          {data.slice(i, i + outputItems).map((da, index) => {
            return <SliderItem da={da} key={index} />;
          })}
        </Box>
      );
    }
  }

  return items;
};
