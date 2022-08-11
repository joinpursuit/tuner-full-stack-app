const Song = ({song, id}) => {
    return (
        <div className="Song">
            <a href={`/songs/${id}`} >{song.name}</a>
            <p>{song.artist}</p>
            <p>{song.album}</p>
            <p>{song.is_favorite ? '⭐️' : null}</p>
            <p>{song.time}</p>
        </div>
    );
};

export default Song;