import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from 'react'
const API = process.env.REACT_APP_API_URL;

function Song({ song }) {
  return (
    <tr>
      <td>
        {song.is_favorite ? (
          <span>💖</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        {/* <a href={song.url} target="_blank" rel="noreferrer"> </a> */}
          {song.name}
       
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>👁</Link>
      </td>
    </tr>
  );
}

export default Song;
