import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Reviews from "./Reviews";
import { Button, Card, Image, Segment } from "semantic-ui-react"

const API = process.env.REACT_APP_API_URL;

function SongDetails() {
    const [song, setSong] = useState({});
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
            .then((res) => setSong(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    const handleDelete = () => {
        axios.delete(`${API}/songs/${id}`)
            .then((res) => navigate(`/songs`))
            .catch((err) => console.log(err));
    };

  return (
    <Segment inverted className="Song-Details">
      <Card.Group className="Song-Details" centered>
        <Card>
          <Card.Content>
            <Image 
              floated="right"
              size="tiny"
              src="https://storage.highresaudio.com/web/imgcache/8f4761f47a19bf8e33244c402e255e76/re6bz2-singshisfa-preview-m3_550x550.jpg"
            />
            <Card.Header>
              <h3>{true ? <span>⭐️</span> : null} {song.name} - By {song.artist}</h3>
            </Card.Header>
            <Card.Meta>{song.album}</Card.Meta>
            <Card.Description>
              <strong>Time: {song.time}</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui three buttons'>
              <Button color="grey" size="mini" as={Link} to={`/songs`}>Back</Button>
              <Button color="green" size="mini" as={Link} to={`/songs/${id}/edit`}>Edit</Button>
              <Button color="black" size="mini" onClick={handleDelete}>Delete</Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
      <Reviews />
    </Segment>
  );
}

export default SongDetails;
