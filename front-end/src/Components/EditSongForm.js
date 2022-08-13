import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const API = process.env.REACT_APP_API_URL;

const EditSongForm = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const updateSong = (updatedSong, id) => {
    axios
      .put(`${API}/songs/${id}`, updatedSong)
      .then(() => navigate(`/songs/${id}`))
      .catch((err) => console.error(err));
  };

  const handleInput = (e) => {
    setSong({ ...song, [e.target.id]: e.target.value });
  };

  const handleCheckbox = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => setSong(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSong(song, id);
  };

  return (
    <div className="Edit">
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Song Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              id="name"
              value={song.name}
              onChange={handleInput}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Artist:</Form.Label>
            <Form.Control
              id="artist"
              value={song.artist}
              type="text"
              placeholder="..."
              onChange={handleInput}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Album:</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              id="album"
              value={song.album}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Time:</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              id="time"
              value={song.time}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Favorite"
              id="is_favorite"
              value={song.is_favorite}
              onChange={handleCheckbox}
            />
          </Form.Group>

          <Link to="/" >
          <Button variant="dark" type="submit">
            Go Back
          </Button>
          </Link>

          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EditSongForm;
