import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

function SongEditForm() {
    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false
    });

    let { id } = useParams();
    let navigate = useNavigate();

    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
            .then((res) => {
                setSong(res.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    const updateSong = (updatedSong) => {
        axios.put(`${API}/songs/${id}`, updatedSong)
            .then((res) => {
                navigate(`/songs/${id}`);
            }).catch((error) => {
                console.log(error);
            })
    };

    const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value })
    };

    const handleCheckboxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateSong(song, id);
    }

    return (
        <div className="song-edit-form">
            <h2>Edit Song</h2>
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
                    value={song.name}
                    label="Song Name"
                    onChange={handleTextChange}
                />
                <TextField
                    required
                    id="artist"
                    value={song.artist}
                    label="Artist"
                    onChange={handleTextChange}
                />
                <TextField
                    required
                    id="album"
                    value={song.album}
                    label="Album"
                    onChange={handleTextChange}
                />
                <TextField
                    required
                    id="time"
                    value={song.time}
                    label="Time"
                    helperText="Time format is 0:00"
                    onChange={handleTextChange}
                />
                 <FormGroup>
                    <FormControlLabel 
                        control={
                            <Checkbox 
                                id="is_favorite"
                                value={song.is_favorite}
                                onChange={handleCheckboxChange}
                                label="favorite"
                                icon={<FavoriteBorder />}
                                checkedIcon={<Favorite />}
                                />
                            } 
                        label="Favorite" 
                        labelPlacement="top"
                    />
                </FormGroup>
                <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        justifyContent="center"
                        alignItems="center" spacing={2}
                >
                    <Link to={`/songs`}>
                        <Button variant="contained" color="primary">Back</Button>
                    </Link>
                    <Button variant="contained" color="success" type="submit">Submit</Button>
                </Stack>
            </Box>
        </div>
    )
}

export default SongEditForm;