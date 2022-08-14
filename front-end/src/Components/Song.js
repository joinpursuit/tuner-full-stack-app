import React from 'react';


function Song({ song, id }) {
  return (
    <tr className="Song">
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={`/songs/${song.id}`}>{song.name}</a>
      </td>
      <td>{song.artist}</td>
      <td>{song.album}</td>
      <td>{song.time}</td>
    </tr>
  );
}

export default Song;
