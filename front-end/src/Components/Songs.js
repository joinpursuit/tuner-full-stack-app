import { useEffect, useState } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL + "/songs")
      .then((res) => {
        setSongs(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <div>
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Fav</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => {
            const { is_favorite, name, artist, time } = song;
            return (
              <tr key={song.id}>
                <td>{is_favorite ? <span>⭐️</span> : <span></span>}</td>
                <td>
                  <Link to={`/songs/${song.id}`}>{name}</Link>
                </td>
                <td>{artist}</td>
                <td>{time}</td>
              </tr>
            );
          })}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
}

export default Songs;
