import axios from "axios";
import { useEffect, useState } from "react";
import Song from "./Song";

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

    return (
        <div className="songs">
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