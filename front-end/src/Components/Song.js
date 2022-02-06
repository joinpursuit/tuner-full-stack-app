import { Link } from "react-router-dom"
import { TableRow, TableCell } from "@mui/material";

function Song({song}) {
  return (
      <>
            <TableCell component="th" scope="row">{song.name}</TableCell>
            <TableCell align="right">{song.artist}</TableCell>
            <TableCell align="right">{song.album}</TableCell>
            <TableCell align="right">{song.time}</TableCell>
    
        <TableCell align="right">
            {song.is_favorite ? (
                <span>⭐️</span>
                )  : (
                    null
                    )}
        </TableCell>

    </>
  )
}

export default Song;
