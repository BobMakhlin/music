import { ListItem, ListItemButton, Typography } from "@mui/material";
import React from "react";

function Track({ track, selected, onClick }) {
  const handleClick = () => {
    onClick(track);
  };

  return (
    <ListItem disablePadding selected={selected}>
      <ListItemButton onClick={handleClick}>
        <img
          height={40}
          src={track.albumImage}
          alt={track.name}
          loading="lazy"
        />
        <Typography variant="span" fontWeight={500} ml={2}>
          {track.name}
        </Typography>
        <Typography variant="caption" fontWeight={500} ml="auto">
          {track.duration?.minutes}:{track.duration?.seconds}
        </Typography>
      </ListItemButton>
    </ListItem>
  );
}

export default React.memo(Track);
