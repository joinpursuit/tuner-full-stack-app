import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import{ Table, TableBody, TableHead, TableRow, TableCell, TableContainer } from "@mui/material";
import Paper from '@mui/material/Paper';
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;


function Songs() {
    const [songs, setSongs] = useState([])

    useEffect(()=>{
        axios.get(`${API}/songs`)
        .then((res)=>{
           setSongs(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, []);


  return (
      <div className="Songs">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name of song</TableCell>
                            <TableCell align="right">Artist</TableCell>
                            <TableCell align="right">Album</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Favorite</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {songs.map((song)=>(
                          <TableRow 
                           key={song.id}
                           component={Link}
                           to={`/songs/${song.id}`}
                        //    sx={{'&:last-child td, &:last-child th': { border: 0 } }}
                           >
                            <Song song={song} />
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
      </div>
  );
}

export default Songs;
