import axios from "axios";
import { useEffect, useState } from "react";
import Song from "./Song";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function Songs() {
    const [ songs, setSongs ] = useState([]);

    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${API}/songs`)
            .then((res) => {
                setSongs(res.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [API]);

    const columns = [
        { field: 'is_favorite', headerName: 'Fave', width: 130 },
        { field: 'name', headerName: 'Song', width: 130 },
        { field: 'artist', headerName: 'Artist', width: 130 },
        { field: 'album', headerName: 'Album', width: 130 },
        // { field: 'lastName', headerName: 'time', width: 130 },
        {
            field: 'time',
            headerName: 'Time',
            type: 'number',
            width: 70,
        },
        { field: 'See Details', headerName: 'Album', width: 130 },
      ];

    return (
        <div className="songs">
            {/* <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={songs}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    // BooleanCellTrueIcon={true}
                />
            </div> */}

            <section>
                <table>
                    <thead>
                        <tr>
                        <th>Favorite</th>
                        <th>Song Name</th>
                        <th>Artist</th>
                        <th>Time</th>
                        <th>Song Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((song) => {
                        return <Song key={song.id} song={song} />;
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Songs;