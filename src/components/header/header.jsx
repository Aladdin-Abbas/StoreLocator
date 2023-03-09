import { Typography } from "@mui/material";
import MobileHeaderSection from "./mobileHeaderSection";

import DesktopHeaderSection from "./desktopHeaderSection";

export const Header = () => {
  return (
    <>
      <Typography
        sx={{
          bgcolor: "#2D2F87",
          color: "white",
          textAlign: "center",
          padding: "8px",
          fontSize: "14px",
          fontFamily: "'Readex Pro', sans-serif",
        }}
      >
        White Friday Sales Up To 70% Off
      </Typography>

      {/**desktop**/}
      <DesktopHeaderSection />

      {/**Mobile**/}
      <MobileHeaderSection />
    </>
  );
};
