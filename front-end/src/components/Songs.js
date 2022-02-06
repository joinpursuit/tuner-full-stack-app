import axios from "axios";
import { useEffect, useState } from "react";

import { Table } from "react-bootstrap";
import Song from "./Song";
const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((response) => setSongs(response.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <Table className="songs">
      <thead>
        <tr>
          <th>Favorite</th>
          <th>Song</th>
          <th>Artist</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song, i) => (
          <Song key={"song" + i} song={song} />
        ))}
      </tbody>
    </Table>
  );
}

export default Songs;
