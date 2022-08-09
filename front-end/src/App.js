/* 
Please forive the execessive amount of comments that may be present throughout this project. I am attempting to not have to lean on old code so much to get me going, and I am trying out commenting what I'm doing as an attempt to help reinforce my memory.
*/

// Clean up and consolidate imports ✓
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

/* Routes:
      -All Songs ✓ 
      -Single Song ✓ 
      -Edit Song ✓ 
      -New Song ✓ 
      -Links in the Navbar ✓

    Non-routed functionality:
      -Delete Song
*/

/* The Holy Grail Layout :
      -Header (NavBar) ✓
      -Footer (Whatever) : Thinking another Appbar with names, github links, direct repo-link? 
      -3 Columns :
        - Left : Maybe a list of available playlists?
        - Center : Song info, relevant buttons ✓
        - Right : ??
*/

/*  To Do
  - Fetch data, set to a state ✓ 
  - Make components ✓ 
    -- Single song display (Show) --- <ShowSong>  ✓
    -- Edit Song (Edit) + Ability to delete --- <EditSong> ✓
    -- All Songs (Home) + Ability to change is_favorite from here --- <Home> + <Song> ✓
      ++ 1 component for displaying all the songs, and 1 component that returns the individual songs to fit into the display format ✓

*/

//Components
import { ShowSong } from "./Components/ShowSong";
import { EditSong } from "./Components/EditSong";
import { NewSong } from "./Components/NewSong";
import { Home } from "./Components/Home";
import { NavBar } from "./Components/NavBar";

const API_KEY = process.env.REACT_APP_API_URL;

function App() {
  const [songs, setSongs] = useState([]); // Set to empty array
  useEffect(() => {
    // Run on page load, and when songs is updated
    axios.get(`${API_KEY}/songs`).then((res) => {
      setSongs(res.data);
    });
  }, [songs]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/songs" element={<Home songs={songs} />}></Route>
        <Route path="/songs/:id" element={<ShowSong API={API_KEY} />}></Route>
        <Route
          path="/songs/:id/edit"
          element={<EditSong API={API_KEY} />}
        ></Route>
        <Route path="/songs/new" element={<NewSong API={API_KEY} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
