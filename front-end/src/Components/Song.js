import { Link } from 'react-router-dom';
import { Table } from "semantic-ui-react";

function Song({ song }) {
  return (
    <Table.Row className='Song'>
        <Table.Cell className='Songs'>
            {song.is_favorite ? (
                <span>⭐️</span>
            ) : (
                <span>🗑</span>
            )}
        </Table.Cell>
        <Table.Cell className='Songs'>
            <Link to={`/songs/${song.id}`}>{song.name}</Link>
        </Table.Cell>
        <Table.Cell className='Songs'>
            {song.artist}
        </Table.Cell>
        <Table.Cell className='Songs'>
            {song.time}
        </Table.Cell>
    </Table.Row>
  );
}

export default Song;
