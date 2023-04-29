import {
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import React from "react";

function Track({ name, albumImage, duration }) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <img height="40px" src={albumImage} alt={name} loading="lazy" />
        <Typography variant="span" fontWeight={500} ml={2}>
          {name}
        </Typography>
        <Typography variant="caption" fontWeight={500} ml="auto">
          {duration?.minutes}:{duration?.seconds}
        </Typography>
      </ListItemButton>
    </ListItem>
  );
}

export default Track;
