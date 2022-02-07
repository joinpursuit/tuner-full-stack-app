import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

function SongDetails() {
    const [song, setSong] = useState([])

    const API = process.env.REACT_APP_API_URL;
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
            .then((res) => {
                setSong(res.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [API, id]);

    const handleDelete = () => {
        axios.delete(`${API}/songs/${id}`)
            .then((res) => {
                navigate("/songs");
            }).catch((error) => {
                console.log(error);
            })
    };

    return (
        <div className="song-details">
            <article>
                <h3>{true ? <span>💙</span> : null} {song.name}</h3>
                <h5>
                    Artist: <span>{song.artist}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {song.url}
                </h5>
                <h5>Album: {song.album}</h5>
                <h5>Song Length: {song.time}</h5>
                <div>
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        justifyContent="center"
                        alignItems="center" spacing={2}
                    >
                        <Link to={`/songs`}>
                            <Button variant="contained" color="primary">Back</Button>
                        </Link>
                        <Link to={`/songs/${id}/edit`}>
                            <Button variant="contained" color="success">
                                Edit
                            </Button>
                        </Link>
                        <Button onClick={handleDelete} variant="contained" color="error">
                            Delete
                        </Button>
                    </Stack>
                </div>
            </article>
        </div>
    )
};

export default SongDetails;