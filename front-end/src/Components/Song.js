const Song = ({ song, id }) => {
  return (
    <>
          <tr>
            <td>{song.is_favorite ? "⭐️" : null}</td>
            <td>
              <a href={`/songs/${id}`}>{song.name}</a>
            </td>
            <td>{song.artist}</td>
            <td>{song.time}</td>
          </tr>
    </>
        
  );
};

export default Song;
