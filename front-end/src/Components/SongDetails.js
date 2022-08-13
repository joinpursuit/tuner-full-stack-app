import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const API = process.env.REACT_APP_API_URL;

const SongDetails = () => {
  const [song, setSong] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => setSong(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const deleteSong = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = () => {
    deleteSong();
  };

  return (
    <div className="Song-Details">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{song.is_favorite ? '⭐️' : null} {song.name}</Card.Title>
          <Card.Text>
            Artist: {song.artist}
            <br/>
            Album: {song.album}
            <br/>
            Time: {song.time}
            <br/>
          </Card.Text>
          <Link to={'/songs'}>
          <Button variant="dark">Back</Button>
          </Link>
          <Link to={`/songs/${id}/edit`}>
          <Button variant="dark">Edit</Button>
          </Link>
          <Button variant="dark" onClick={handleDelete}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SongDetails;
