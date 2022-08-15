import React from "react";

const API = process.env.REACT_APP_API_URL;

export default function Song({ song }) {
  return (
    <tr>
      <td class="Songs">
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td class="Song">
        <p>{song.name}</p>
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
