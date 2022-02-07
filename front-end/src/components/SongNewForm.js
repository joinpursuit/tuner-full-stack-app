import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function SongNewForm() {
    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false
    });

    const API = process.env.REACT_APP_API_URL;
    let navigate = useNavigate();

    const addSong = (newSong) => {
        axios.post(`${API}/songs`, newSong)
            .then((res) => {
                navigate("/songs");
            }).catch((error) => {
                console.log(error);
            })
    };

    const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value});
        // console.log(song)
    };

    const handleCheckboxChange = () => {
        setSong({...song, is_favorite: !song.is_favorite});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addSong(song);
    }

    return (
        <div className="song-new-form">
            <h2>Add a New Song</h2>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField
                    required
                    id="name"
                    label="Song Name"
                    onChange={handleTextChange}
                />
                <TextField
                    required
                    id="artist"
                    label="Artist"
                    onChange={handleTextChange}
                />
                <TextField
                    required
                    id="album"
                    label="Album"
                    onChange={handleTextChange}
                />
                <TextField
                    required
                    id="time"
                    label="Time"
                    helperText="Time format is 0:00"
                    onChange={handleTextChange}
                />
                 <FormGroup>
                    <FormControlLabel 
                        control={
                            <Checkbox 
                                onChange={handleCheckboxChange} 
                                label="favorite" 
                                icon={<FavoriteBorder />} 
                                checkedIcon={<Favorite />} 
                            />
                        } 
                        label="Favorite?" 
                    />
                </FormGroup>
                <Button variant="outlined" type="submit">Submit</Button>
            </Box>
        </div>
    )
}

export default SongNewForm;