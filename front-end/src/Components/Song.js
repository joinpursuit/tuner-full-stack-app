import React from "react";
import TableCell from "@mui/material/TableCell";
import { TableRow } from "@mui/material";

//This component returns an individual row for the table
export const Song = ({ song }) => {
  // Remember to destructure props, even if only a single item
  return (
    <>
      <TableCell>{song.name}</TableCell>
      <TableCell>{song.artist}</TableCell>
      <TableCell>{song.album}</TableCell>
      <TableCell>{song.time}</TableCell>
    </>
  );
};
