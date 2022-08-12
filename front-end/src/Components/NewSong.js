import React from "react";
import { useNavigate } from "react-router-dom";

//Mui
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const NewSong = ({ API }) => {
  const navigate = useNavigate();
  // Noticed useState could be done like this and am trying it out
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [song, makeSong] = React.useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: "false",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };

  const handleChange = (e) => {
    makeSong({ ...song, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong();
  };

  const addSong = () => {
    try {
      axios
        .post(`${API}/songs`, song)
        .then((res) => {
          makeSong(res.data);
        })
        .then((res) => setSnackOpen(true))
        .then((res) => {
          setTimeout(() => {
            navigate("/songs");
          }, 3000); // Navigates after 3 seconds
        });
    } catch (error) {
      console.log("Something's wrong " + error);
      return error;
    }
  };
  
  return (
    <div>
      <h1>Add a new song to the playlist</h1>
      <Box
        component="form" //This marks the box as a form
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="name"
          label="Song Name"
          variant="outlined"
          value={song.name}
          onChange={handleChange}
        />
        <TextField
          id="artist"
          label="Artist Name"
          variant="outlined"
          value={song.artist}
          onChange={handleChange}
        />
        <TextField
          id="album"
          label="Album"
          variant="outlined"
          value={song.album}
          onChange={handleChange}
        />
        <TextField
          id="time"
          label="Length"
          variant="outlined"
          value={song.time}
          onChange={handleChange}
        />
        {/* And then decide what I want to put here for marking it as
        a favorite or not */}
        <Button onClick={handleSubmit}>Add song</Button>
      </Box>
      <Snackbar open={snackOpen} autoHideDuration={2500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Song added successfully!
        </Alert>
      </Snackbar>
      ;
    </div>
  );
};
