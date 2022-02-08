import { Link } from "react-router-dom"

function Song( {song, id} ) {
    return(
        <div>
            <div>
            {song.is_Favorite}
            {song.name}
            {song.artist}
            {song.time}
            </div>
            <Link to={`/songs/${id}`}></Link>
        </div>

    )
}

export default Song;