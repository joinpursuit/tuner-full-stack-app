import { useState, useEffect } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";

import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SongEditForm() {
  let { id } = useParams();

  const navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    time: "",
    is_favorite: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => setSong(res.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleTextChange = (event) => {
    console.log("WHAT IS THIS-----------")
  
    setSong({ ...song, [event.target.id]: event.target.value });
  };
//   SUBMIT HAS AN ERROR --------------------
  // const editSong = (updateSong) => {
  //   console.log("WHAT IS THIS")
  //   axios
  //     .put(`${API}/songs/${id}`, updateSong)
  //     .then((res) => {
  //       // setSong(res.data);
  //       navigate(`/songs`);
  //     })
  //     .catch((error) => console.error(error));
  // };

  const editSong = (updatedSong) => {
    console.log(updatedSong)
    axios.put(`${API}/songs/${id}`, updatedSong)
      .then(() => {
        console.log("hello!")
        navigate(`/songs/${id}`)
      },
      (error) => console.error(error, "!!!")
      )
      .catch((c) => console.warn("catch", c)) 
  };


//   const handleNumberChange = (event) => {
//     setSong({
//       ...song,
//       [event.target.id]: Number(event.target.value),
//     });
//   };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    editSong(song);
  };

  return (
    <div className="edit">
    <fieldset>
      <h1>Edit Song</h1>
      <form onSubmit={handleSubmit}>
        <h3>Song Name</h3>
        <input
          id="name"
          value={song.name}
          type="text"
          placeholder="Song Name"
          onChange={handleTextChange}
        />
        <h3>Song Artist</h3>
        <input
          id="artist"
          value={song.artist}
          type="text"
          placeholder="Song Artist"
          onChange={handleTextChange}
        />
         <h3> Is Favorite</h3>
        <input
          id="is_favorite"
          value={song.is_favorite}
          type="checkbox"
          placeholder="Favorite"
          required
        //   checked="true"
        //   onClick={() =>!checked}

        //   onChange={handleTextChange}
        />
        <h3>Song Time</h3>
        <input
          id="time"
          value={song.time}
          type="text"
          placeholder="Song Time"
          onChange={handleTextChange}
        />
       
        <br />
        <br />
        <input value="EDIT SONG" type="submit" />
      </form>
      <br></br>
      <Link to={`/songs/${id}`}>
        <button>BACK</button>
      </Link>
      </fieldset>
    </div>
  );
}

export default SongEditForm;
