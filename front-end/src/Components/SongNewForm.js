import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Box } from "@mui/system";
import { FormControl, Input, InputLabel, TextField, OutlinedInput, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import {  } from "@mui/material";

const API = process.env.REACT_APP_API_URL;

function SongNewForm() {
    let navigate = useNavigate();

    const addSong = (newSong) => {
        axios.post(`${API}/songs`, newSong)
        .then(()=>{
            navigate("/songs")
        }).catch((err)=>{
            console.log(err)
        })
    }

    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
    });

    const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addSong(song);
    };


  return (
      <div className="newForm">
          <Box component="form" onSubmit={handleSubmit} sx={{}}>
              <FormControl required margin="dense">
                  <InputLabel htmlFor="name">Song Name</InputLabel>
                  <OutlinedInput 
                    id="name" 
                    value={song.name} 
                    onChange={handleTextChange} 
                    label="Song Name" 
                  />
              </FormControl>
                <br />
              <FormControl required margin="dense">
                  <InputLabel htmlFor="artist">Artist Name</InputLabel>
                  <OutlinedInput 
                    id="artist" 
                    value={song.artist} 
                    onChange={handleTextChange} 
                    label="Artist Name" />
              </FormControl>
                <br />
              <FormControl margin="dense">
                  <InputLabel htmlFor="album">Album</InputLabel>
                  <OutlinedInput 
                    id="album" 
                    value={song.album} 
                    onChange={handleTextChange} 
                    label="Album" 
                  />
              </FormControl>
                <br />
              <FormControl margin="dense">
                  <InputLabel htmlFor="time">Time</InputLabel>
                  <OutlinedInput 
                    id="time" 
                    value={song.time} 
                    onChange={handleTextChange} 
                    label="Time" 
                  />
              </FormControl>
                <br />
              <FormControlLabel control={<Checkbox/>} label="Favorite"onChange={handleCheckboxChange} />
              <br />
              <input type="submit" />
          </Box>
      </div>
  )
}

export default SongNewForm;
