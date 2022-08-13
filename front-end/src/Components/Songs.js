import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const API = process.env.REACT_APP_API_URL;

const Songs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((res) => setSongs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Songs">
      <h1>List of Songs</h1>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Fav</th>
              <th>Song</th>
              <th>Artist</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => (
              <Song key={song.id} song={song} id={song.id} />
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Songs;
