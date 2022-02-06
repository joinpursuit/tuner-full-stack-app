import axios from 'axios';
import {useState, useEffect } from "react";

function AllSongs() {
    return (
      <div className="Song">
        <section>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Favortite Song?</th>
                <th>Artist</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {/* {bookmarks.map((bookmark) => {
                return <Bookmark key={bookmark.id} bookmark={bookmark} />;
              })} */}
            </tbody>
          </table>
        </section>

      </div>
    );
  }
  
  export default AllSongs;
  