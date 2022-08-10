import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function EditTrack() {
  let { id } = useParams();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: 0,
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleFavoriteChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {}, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Track Name"
          required
        />
        <label htmlFor='artist'></label>
      </form>
    </div>
  );
}



export default EditTrack;