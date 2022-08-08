import React from "react";
import { Song } from "./Song";

/* To Do 
    - Favorite button clickable to toggle between favorite or not
    - Edit button brings you to do songs individual edit page
*/

// MUI Imports

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@material-ui/core";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const SongTable = ({ songs }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minwidth: 650 }} aria-label="Song Playlist">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Artist</TableCell>
            <TableCell>Album</TableCell>
            <TableCell>Song Length</TableCell>
            <TableCell>Favorite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {songs.map((song) => {
            return (
              <TableRow key={song.id}>
                <TableCell>{song.name}</TableCell>
                <TableCell>{song.artist}</TableCell>
                <TableCell>{song.album}</TableCell>
                <TableCell>{song.time}</TableCell>
                <TableCell>
                  <Button>
                    {song.is_favorite ? (
                      <FavoriteIcon />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button>Edit</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
