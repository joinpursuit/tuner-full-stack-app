const Song = ({song}) => {
    return (
        <div>
            <h1>Song: Show</h1>
            <p>{song.is_favorite ? '⭐' : null}{song.name}</p>
            <p>{song.artist}</p>
            <p>{song.album}</p>
            <p>{song.time}</p>
        </div>
    );
};

export default Song;