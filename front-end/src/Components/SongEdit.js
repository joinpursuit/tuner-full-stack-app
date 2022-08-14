import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {Button, Form} from 'react-bootstrap'
const API = process.env.REACT_APP_API_URL;

 function SongEdit() {
const {id } = useParams();
const navigate = useNavigate();

  const [song, setSong] = useState({
    name: '',
    artist: '',
    album: '',
    time: '',
    is_favorite: false,
  });

  const updateSong = () => {
    axios
       .put(`${API}/songs/${id}`, song)
      .then((response) => {
        setSong(response.data);
        navigate(`/songs/${id}`);
      })
      .catch((error) => console.log(error));
  
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then(
      (res) => setSong(res.data),
      (error) => navigate(`/songs`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song,id);
  };

  return (
    <div className="Edit">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="name">Song Name</Form.Label>
          <Form.Control
            id="name"
            value={song.name}
            type="text"
            placeholder="Song Name"
            onChange={handleTextChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="artist">Artist:</Form.Label>
          <Form.Control
            id="artist"
            value={song.artist}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Artist"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="album">Album:</Form.Label>
          <Form.Control
            id="album"
            value={song.album}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Album"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="time">Time:</Form.Label>
          <Form.Control
            id="time"
            value={song.time}
            type="text"
            onChange={handleTextChange}
            placeholder="Length of Time"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            id="is_favorite"
            type="checkbox"
            value={song.is_favorite}
            label="Favorite"
            onChange={handleCheckboxChange}
          />
        </Form.Group>
        <br />
        <Button variaint="warning" type="submit">
          Submit
        </Button>
      </Form>
      <Link to={`/songs/${id}`}>
        <Button variant="info">Nevermind!</Button>
      </Link>
    </div>
  );
}
export default SongEdit;