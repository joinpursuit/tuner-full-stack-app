import React from "react";

const API = process.env.REACT_APP_API_URL;

export default function Song({ song }) {
  return (
    <tr>
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
    </tr>
  );
}
