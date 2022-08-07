/* Please forive the execessive amount of comments that may be present throughout
  this project. I am attempting to not have to lean on old code so much to get me going,
  and I am trying out commenting what I'm doing as an attempt to help reinforce 
  my memory.
*/

// Clean up and consolidate imports
import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

/* Routes:
      -All Songs
      -Single Song
      -Edit Song
      -New Song

    Non-routed functionality:
      -Delete Song
*/

/* The Holy Grail Layout :
      -Header (NavBar)
      -Footer (Whatever)
      -3 Columns :
        - Left : ??
        - Center : Song info, relevant buttons
        - Right : ??
*/

/*  To Do
  - Fetch data, set to a state 
  - Make components 
    -- Single song display (Show) --- <ShowSong>  ✓
    -- Edit Song (Edit) + Ability to delete --- <EditSong> ✓
    -- All Songs (Home) + Ability to change is_favorite from here --- <Home> + <Song> ✓
      ++ 1 component for displaying all the songs, and 1 component that returns the individual
          songs to fit into the display format ✓

*/

//Components
import { ShowSong } from "./Components/ShowSong";
import { EditSong } from "./Components/EditSong";
import { NewSong } from "./Components/NewSong";
import { Home } from "./Components/Home";

const API_KEY = process.env.REACT_APP_API_URL;

function App() {
  const [songs, setSongs] = useState([]); // Set to empty array
  useEffect(() => {
    // Run on page load, and when songs is updated
    axios.get(`${API_KEY}/songs`).then((res) => {
      setSongs(res.data);
      console.log("I have succeded, here are the songs : " + songs);
    });
  }, [songs]);

  return (
    <div className="App">
      <div>I will be the navbar - someday</div>
      <Routes>
        <Route path="/songs" element={<Home songs={songs} />}></Route>
        <Route path="/songs/:id" element={<ShowSong API={API_KEY}/>}></Route>
        <Route path="/songs/:id/edit" element={<EditSong API={API_KEY}/>}></Route>
        <Route path="/songs/new" element={<NewSong API={API_KEY}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
