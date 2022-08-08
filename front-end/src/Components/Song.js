import React from "react";
import TableCell from "@mui/material/TableCell";
import { TableRow } from "@mui/material";

//This component returns an individual row for the table
export const Song = ({ song }) => {
  // Remember to destructure props, even if only a single item
  return (
    <div>
      <TableCell component="th" scope="row">
        {song.name}
      </TableCell>
      <TableCell>{song.artist}</TableCell>
    </div>
  );
};
