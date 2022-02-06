
import React from 'react';

function Album({album}) {
  return <div>
      <h4>
          {album.title} <span>{album.artist}</span>
      </h4>
      <h5>{album.release_date}</h5>
  </div>;
}

export default Album;
