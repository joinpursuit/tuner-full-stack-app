import { Button, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [song, setSongs] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/songs/${id}`)
      .then((res) => {
        setSongs(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, API_URL]);

  const handleDelete = () => {
    axios
      .delete(`${API_URL}/songs/${id}`)
      .then((res) => {
        navigate("/songs");
      })
      .catch(() => {
        navigate("not-found");
      });
  };


  return (
    <div>
      <ListGroup variant="flush">
        <ListGroup.Item>
          {song.name} - By {song.artist}
        </ListGroup.Item>
        <ListGroup.Item>{song.album}</ListGroup.Item>
        <ListGroup.Item>Time: {song.time}</ListGroup.Item>
      </ListGroup>
      <div className="pageNavigation">
        <div>
          <Link to={`/songs`}>
            <Button variant="outline-primary">Back</Button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${id}/edit`}>
            <Button variant="outline-primary"> Edit</Button>
          </Link>
        </div>
        <div>
          <Button variant="outline-primary" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SongDetails;
