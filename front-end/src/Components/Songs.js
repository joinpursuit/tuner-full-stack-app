import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useState, useEffect } from "react";
import Song from './Song';

const API = process.env.REACT_APP_API_URL;

function Songs() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        axios
            .get(`${API}/songs`)
            .then(response => setSongs(response.data))
            .catch((c) => console.warn("catch", c))
    }, []);
    return (
        <Container>
         <Table striped bordered hover size="sm"> 
         <thead>
        <tr>
          <th>Fav</th>
          <th>Song Name</th>
          <th>Artist</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody className="Songs">
      {songs.map((song) => {
                    return <Song key={song.id} song={song} />;
                })}
      </tbody>
        </Table> 
        </Container>
        
    );
}

export default Songs;