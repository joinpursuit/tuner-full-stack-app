import {Link} from "react-router-dom";

function Song({song}) {
    let {id, name, artist, time, is_favorite} = song;
    return(
        <div>
            <h1>{name}</h1>
            <h3>Artist: {artist}</h3>
            <h3>Time: {time}</h3>
            <h3>Favorite: {is_favorite ? "True" : "False"}</h3>
            <button><Link to = {`/songs/${id}`}>More Details</Link></button>
        </div>
    )
}

export default Song;
