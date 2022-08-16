import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function SongNewForm() {
  let navigate = useNavigate();

  const addSong = (newSong) => {
    axios
      .post(`${API}/songs`, newSong)
      .then(() => {
        navigate(`/songs`);
      },
        (error) => console.error(error))
      .catch((c) => console.warn("catch", c));
  };

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
    <div className="Edit">
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control id="name" value={song.name} type="text" onChange={handleTextChange} placeholder="Song Name" required />
            <Form.Text className="text-muted">
                Edit Song name above
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Artist:</Form.Label>
            <Form.Control id="artist" type="text" value={song.artist} onChange={handleTextChange} placeholder="Artist" />
            <Form.Text className="text-muted">
                Edit Artist name above
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Album:</Form.Label>
            <Form.Control id="album" type="text" value={song.category} onChange={handleTextChange} placeholder="Album Name" />
            <Form.Text className="text-muted">
                Edit Album name above
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Time:</Form.Label>
            <Form.Control id="time" type="text" value={song.time} onChange={handleTextChange} placeholder="Time" />
            <Form.Text className="text-muted">
                Edit Time above
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Favorites:</Form.Label>
            <Form.Check id="is_favorite" type="checkbox" onChange={handleCheckboxChange} checked={song.is_favorite} />
            <Form.Text className="text-muted">
                Check the box to add to favorites.
            </Form.Text>
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
</div>
  );
}


