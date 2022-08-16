import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

//Mui
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

export const EditSong = ({ API }) => {
  const navigate = useNavigate();
  const [song, setSong] = React.useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: "",
  });

  let { id } = useParams();
  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then((res) => {
      setSong(res.data);
    });
  }, [API, id]);

  const handleChange = (e) => {
    let value = e.target.value;
    setSong({ ...song, [e.target.id]: value });
  };
  const handleFavorite = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  }; // Thank you Dan and Tim for getting me to un-complicate this and make it to work.

  const handleSubmit = (e) => {
    e.preventDefault();
    editSong();
  };

  const handleDelete = () => {
    axios.delete(`${API}/songs/${id}`);
    navigate("/songs");
  };

  const editSong = () => {
    axios
      .put(`${API}/songs/${id}`, song)
      .then((res) => {
        setSong(res.data);
      })
      .then(navigate("/songs"))
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="name"
          label=""
          variant="outlined"
          value={song.name}
          onChange={handleChange}
        />
        <TextField
          id="artist"
          label=""
          variant="outlined"
          value={song.artist}
          onChange={handleChange}
        />
        <TextField
          id="album"
          label=""
          variant="outlined"
          value={song.album}
          onChange={handleChange}
        />
        <TextField
          id="time"
          label=""
          variant="outlined"
          value={song.time}
          onChange={handleChange}
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              id="is_favorite"
              checked={song.is_favorite}
              onChange={handleFavorite}
            ></Checkbox>
          }
          label="Favorite"
        />
        <Button onClick={handleSubmit}>Edit Song</Button>
        <Button onClick={handleDelete}>Delete Song</Button>
      </Box>
    </div>
  );
};
