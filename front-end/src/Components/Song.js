import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const Song = ({ song, id }) => {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Fav</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{song.is_favorite ? "⭐️" : null}</td>
            <td>
              <a href={`/songs/${id}`}>{song.name}</a>
            </td>
            <td>{song.artist}</td>
            <td>{song.time}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Song;
