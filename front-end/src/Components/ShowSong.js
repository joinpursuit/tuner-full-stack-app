import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//Mui
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Container } from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const ShowSong = ({ API }) => {
  const { id } = useParams(); // For heaven's sake - REMEMBER TO DESTRUCTURE
  const [song, setSong] = useState({});
  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then((res) => {
      setSong(res.data); // Neglected the .data, wasting about 2 hours
    });
  });

  return (
    <>
      <Container maxWidth="sm">
        <List>
          <ListItem>
            <ListItemIcon>
              {song.is_favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </ListItemIcon>
            <ListItemText>{song.name}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>{song.artist}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>{song.album}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>{song.time}</ListItemText>
          </ListItem>
        </List>
      </Container>
    </>
  );
};
