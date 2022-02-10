import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function SongDetails(){
  const [song, setSong] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/songs/${id}`)
      .then((res)=>{
        setSong(res.data);
      }).catch(()=>{
        navigate("/not-found");
      });
    }, [id]);

    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_API_URL}/songs/${id}`)
          .then((res)=>{
            navigate("/songs");
          }).catch((err)=>{
            console.log(err);
          })
      };
    return(
        <article className = "Song-Details">
            <h3>
                {song.is_favorite ? <span>⭐️</span> : null} {song.name}
            </h3>
            <h5>
                <div>Song time: {song.time}</div>
            </h5>
            <p>Artist: {song.artist}</p>
            <p>Album: {song.album}</p>
            <div className="showNavigation">
                <div>
                {" "}
                <Link to={`/songs`}>
                    <button>Back</button>
                </Link>
                </div>
                <div>
                {" "}
                <Link to={`/songs/${id}/edit`}>
                    <button>Edit</button>
                </Link>
                </div>
                <div>
                {" "}
                <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </article>
    )
}

export default SongDetails;