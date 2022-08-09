import React from "react";
import { Song } from "./Song";
import axios from "axios";

/* To Do 
    - Favorite button clickable to toggle between favorite or not ✓ 
        -- Doing this changes the position of the song in the database. Why?
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


const API_KEY = process.env.REACT_APP_API_URL;

export const SongTable = ({ songs }) => {
  const tableHeaders = ["Title", "Artist", "Album", "Length", "Favorite"];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minwidth: 650 }} aria-label="Song Playlist">
        <TableHead>
          <TableRow>
            {tableHeaders.map((header) => {
              return <TableCell align="center">{header}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {songs.map((song) => {
            return (
              <TableRow key={song.id}>
                <Song song={song} />
                <TableCell>
                  <Button
                    onClick={() => {
                      const fav = song.is_favorite ? "false" : "true";
                      axios.put(`${API_KEY}/songs/${song.id}`, {
                        name: song.name,
                        artist: song.artist,
                        album: song.album,
                        time: song.time,
                        is_favorite: fav,
                      });
                    }}
                  >
                    {song.is_favorite ? (
                      <FavoriteIcon />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button href={`/songs/${song.id}/edit`}>Edit</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
