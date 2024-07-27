import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import styles from "./FloatingButton.module.css";

export default function FloatingButtons() {
  const handleNavigateClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        right: 0,
        "& > :not(style)": { m: 1 },
      }}
    >
      <Fab color="info" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended" onClick={handleNavigateClick}>
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
    </Box>
  );
}
