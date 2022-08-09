import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const ShowSong = ({ API }) => {
  const { id } = useParams(); // For heaven's sake - REMEMBER TO DESTRUCTURE
  const [song, setSong] = useState({});
  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then((res) => {
      setSong(res.data); // Neglected the .data, wasting about 2 hours
    });
  });

  return (
    <>
      <p>{song.name}</p>
      <p>{song.artist}</p>
      <p>{song.album}</p>
      <p>{song.time}</p>
      <p>{song.is_favorite ? "Yep" : "Nope"}</p>
    </>
  );
};
