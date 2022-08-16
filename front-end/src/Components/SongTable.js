import React from "react";
import { Song } from "./Song";
import axios from "axios";

/* To Do 
    - Favorite button clickable to toggle between favorite or not ✓ 
        -- Doing this changes the position of the song in the database. Why?
        -- Sort all items by name on first load 
          - Set the current chosen sort to a state
          - Upon changing a favorite's status, do an immediate sort of
            the type that was last chosen (default : name)
          - Will need different methods for any others I may choose
            to implement
    - Edit button brings you to do songs individual edit page ✓
    - Set Snackbar to show after toggling favorite status ✓
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
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

const API_KEY = process.env.REACT_APP_API_URL;

//Code taken from example on MUI documentation.
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const transitionRight = (props) => {
  return <Slide {...props} direction="left" />;
};

export const SongTable = ({ songs }) => {
  const [open, setOpen] = React.useState();
  const tableHeaders = ["Title", "Artist", "Album", "Length", "Favorite"];
  const [alertHeaders, setAlertHeaders] = React.useState({
    severity: "",
    body: "",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
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
                        const fav = song.is_favorite ? false : true;
                        axios.put(`${API_KEY}/songs/${song.id}`, {
                          name: song.name,
                          artist: song.artist,
                          album: song.album,
                          time: song.time,
                          is_favorite: fav,
                        });
                        //This part took shamefully way too long to get. It kept displaying the wrong alert type
                        fav === true
                          ? setAlertHeaders({
                              severity: "success",
                              body: "Song added to favorites",
                            })
                          : setAlertHeaders({
                              severity: "info",
                              body: "Song removed from favorites",
                            });
                        setOpen(true);
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
      <Snackbar
        open={open}
        autoHideDuration={1000}
        TransitionComponent={transitionRight}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={alertHeaders.severity}
          sx={{ width: "100%" }}
        >
          {alertHeaders.body}
        </Alert>
      </Snackbar>
    </div>
  );
};
