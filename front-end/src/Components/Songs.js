import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song.js";
import { Table } from "semantic-ui-react";

const API = process.env.REACT_APP_API_URL;

function Songs() {
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        axios.get(`${API}/songs`)
            .then((res) => setSongs(res.data))
            .catch((err) => console.log(err));
    }, []);

    const color = "black";

  return (
        <Table className="Songs" celled inverted selectable color={color} >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Fav</Table.HeaderCell>
                    <Table.HeaderCell>Song</Table.HeaderCell>
                    <Table.HeaderCell>Artist</Table.HeaderCell>
                    <Table.HeaderCell>Time</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {songs.map((song) => {
                    return <Song key={song.id} song={song} />;
                })}
            </Table.Body>
        </Table>
    );
}

export default Songs;
