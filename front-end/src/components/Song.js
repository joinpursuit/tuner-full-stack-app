function Song({ song }) {
  return (
    <tr>
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>{song.name}</td>
      <td>{song.artist}</td>
      <td>{song.time}</td>
    </tr>
  );
}

export default Song;
