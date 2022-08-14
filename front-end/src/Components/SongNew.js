import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const API = process.env.REACT_APP_API_URL;

 function SongNew() {
  let navigate = useNavigate();

  const addSong = () => {
   axios
     .post(`${API}/songs`, song)
     .then((response) => navigate(`/songs`))
     .catch((error) => console.log(error));
  };

  const [song, setSong] = useState({
    name: '',
    artist: '',
    album: '',
    time: '',
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
    navigate(`/songs`);
  };

  return (
    
   
        <Form onSubmit={handleSubmit}>
          <Form.Group >
            <Form.Label htmlFor="name">Song Name</Form.Label>
            <Form.Control
              id="name"
              // value='song.name'
              type="text"
              placeholder="Name of Song"
              required
              onChange={handleTextChange}
            ></Form.Control>
            {/* <input type="text" placeholder="Name of Song" required /> */}
          </Form.Group>
          <Form.Group  >
            <Form.Label htmlFor="name">Artist Name</Form.Label>
            <Form.Control
              id="artist"
              // value='song.artist'
              type="text"
              placeholder="Name of Artist"
              required
              onChange={handleTextChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group >
            <Form.Label htmlFor="name">Album Name</Form.Label>
            <Form.Control
              id="album"
              // value='song.album'
              type="text"
              placeholder="Name of Album"
              required
              onChange={handleTextChange}
            ></Form.Control>
            {/* <input type="text" placeholder="Name of Song" required /> */}
          </Form.Group>
          <Form.Group >
            <Form.Label htmlFor="name">Time</Form.Label>
            <Form.Control
              id="time"
              // value='song.time'
              type="text"
              placeholder="Length of Time"
              required
              onChange={handleTextChange}
            ></Form.Control>
            {/* <input type="text" placeholder="Name of Song" required /> */}
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              id="name"
              // value='song.is_favorite'
              type="checkbox"
              label="Favorite"
              required
              onChange={handleCheckboxChange}
            ></Form.Check>
            {/* <input type="text" placeholder="Name of Song" required /> */}
          </Form.Group>
          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Form>
     
   
  );
}

export default SongNew