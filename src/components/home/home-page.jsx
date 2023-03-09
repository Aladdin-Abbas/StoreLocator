import HeroSlider from "../slider/heroSlider";
import CategorySlider from "../slider/categorySlider";
import ActiveSlider from "../slider/activeSlider";
import Brands from "../slider/brands";
import ProductsBase from "../slider/productsBase";
import ShopNow from "../slider/shopNow";
import { createTheme, ThemeProvider } from "@mui/material";
export const HomePage = ({ data }) => {
  const [
    sliderData,
    categoriesData,
    brandsData,
    featuredProducts,
    mostViewedProducts,
  ] = data;

  const theme = createTheme({
    typography: {
      fontFamily: [
        "SFDisplay",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  const shopNowData = [
    {
      id: 1,
      image: "/images/shopNow.png",
    },
  ];

  const activeData = [
    {
      id: 1,
      image: "/images/active1.png",
    },
    {
      id: 2,
      image: "/images/active2.png",
    },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <HeroSlider data={sliderData} priority />
        <CategorySlider data={categoriesData} />
        <ActiveSlider data={activeData} />
        <Brands data={brandsData} />
        <HeroSlider data={shopNowData} />
        <ProductsBase data={featuredProducts} title="Featured Items" />
        <ProductsBase data={mostViewedProducts} title="Most Viewed Items" />
        <ShopNow />
      </ThemeProvider>
    </>
  );
};
