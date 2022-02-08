import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Segment, Input } from 'semantic-ui-react';

const API = process.env.REACT_APP_API_URL;

function SongNewForm() {
    let navigate = useNavigate();
    
    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        is_favorite: false,
        time: "",
    });

    const addSong = (newSong) => {
      axios.post(`${API}/songs`, newSong)
      .then((res) => navigate(`/songs`))
      .catch((err) => console.log(err));
    };

    const handleTextChange = (e) => {
        setSong({ ...song, [e.target.id]: e.target.value });
    };

    const handleCheckboxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      addSong(song);
    };

  return (
    <Segment inverted className="Edit">
      <Form inverted onSubmit={handleSubmit}>
      <Form.Group widths="equal">
          <Form.Field 
            id="name"
            value={song.name}
            control={Input}
            label="Name"
            onChange={handleTextChange}
            placeholder="Artist Name"
            required
          />
          <Form.Field 
            id="artist"
            value={song.artist}
            control={Input}
            label="Artist"
            onChange={handleTextChange}
            placeholder='Name of Song'
            required
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field 
            id="album"
            value={song.album}
            control={Input}
            label="Album"
            onChange={handleTextChange}
            placeholder='Name of Album'
            required
          />
          <Form.Field 
            id="time"
            value={song.time}
            control={Input}
            name="time"
            label="Time"
            onChange={handleTextChange}
            placeholder='Duration of Song'
            required
          />
        </Form.Group>
        <Form.Checkbox 
          id="is_favorite"
          // value={song.is_favorite}
          label="Favorite"
          onChange={handleCheckboxChange}
          required
        />
        <br />

        <Button inverted color="green">Submit</Button>
      </Form>
    </Segment>
  );
}

export default SongNewForm;
