import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import image from "../Components/Images/music.jpeg"

const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const { id } = useParams();

  const nav = useNavigate();

  const [song, setSong] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => {
        setSong(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`${API}/songs/${id}`).then(() => nav('/songs'));
  };

  return (
    <Card>
      <Card.Img variant="top" src={image} />

      <Card.Body>
        <Card.Title>
          <h1>Tuner Song</h1>
        </Card.Title>
        <Card.Text>
      
            <h3>
              {song.is_favorite ? <span>⭐️</span> : null} {song.name}
            </h3>
            <h3>
              <span>{song.artist}</span>
            </h3>
            <h3>{song.album}</h3>
            <h3>{song.time}</h3>
      
        </Card.Text>
        <Link to={`/songs`}>
          <Button>Back</Button>{' '}
        </Link>{' '}
        <Link to={`/songs/${id}/edit`}>
          <Button>Edit</Button>{' '}
        </Link>{' '}
        <Link to={`/songs`}>
          <Button onClick={handleDelete}>Delete</Button>{' '}
        </Link>
      </Card.Body>
    </Card>
  );
}

export default SongDetails;

    