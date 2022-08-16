import React from "react";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function Song({ song }) {
  return (
    <tr class="Song">
      <td class="Songs">
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td class="Song">
      <Link to={`/songs/${song.id}`}> <a href={song.id}>
          {song.name}
        </a> </Link>
      </td>
      <td class="Songs">
        <p>{song.artist}</p>
      </td>
      <td class="Songs">
        <p>{song.time}</p>
      </td>
    </tr>
  );
}
