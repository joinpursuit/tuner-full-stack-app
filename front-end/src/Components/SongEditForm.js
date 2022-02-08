import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button, Form, Segment, Input } from 'semantic-ui-react'

const API = process.env.REACT_APP_API_URL;

function SongEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    is_favorite: false,
    time: "",
  });

  const updateSong = (updatedSong) => {
    axios.put(`${API}/songs/${id}`, updatedSong)
      .then((res) => navigate(`/songs/${id}`))
      .catch((err) => console.log(err));
  }

  const handleTextChange = (e) => {
    setSong({ ...song, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/songs/${id}`)
      .then((res) => setSong(res.data))
      .catch((err) => navigate(`/not-found`));
  }, [id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSong(song, id);
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
          label="Favorite"
          onChange={handleCheckboxChange}
          required
        />
        <br />

        <Button inverted color="green" type="submit">Submit</Button>
        <Button inverted color="grey" as={Link} to={`/songs/${id}`}>Nevermind!</Button>
      </Form>
    </Segment>
  );
}

export default SongEditForm;
