import React from "react";
import TableCell from "@mui/material/TableCell";
import { Link } from "react-router-dom";

//This component returns an individual row (as cells) for the table
export const Song = ({ song }) => {
  return (
    <>
      <TableCell>
        <Link to={`/songs/${song.id}`}>{song.name}</Link>
      </TableCell>
      <TableCell>{song.artist}</TableCell>
      <TableCell>{song.album}</TableCell>
      <TableCell>{song.time}</TableCell>
    </>
  );
};
