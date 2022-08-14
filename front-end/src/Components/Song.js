import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from 'react'
const API = process.env.REACT_APP_API_URL;

function Song({ song }) {
  return (
    <tr className="Song">
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
      <p>{song.name}</p>
      </td>
      <td>
        <p>{song.artist}</p>
      </td>
      <td>
        <p>{song.time}</p>
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Song;
