import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Song({song}) {
  const navigate = useNavigate();

// {console.log(song.id)}

  const handleDelete = () => {
    axios
      .delete(`${API}/songs/${song.id}`)
      .then((response) => {window.location.reload();})
      .catch((error) => console.error(error));
  };

  return (
    <tr>
      {/* <td>{song.date}</td> */}
      <td className="Song">
        <a href={`/songs/${song.id}`} rel="noreferrer">
          {song.name}
        </a>
      </td>
      <td>{song.artist}</td>
      <td>
        {" "}
        <Link to={`/songs/${song.id}/edit`}>
          <button>Edit</button>
        </Link>
      </td>

      <td>
        {" "}
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}
