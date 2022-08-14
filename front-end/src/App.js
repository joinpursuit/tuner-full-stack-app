import React from 'react';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Songs from './Components/Songs';
import SongDetails from './Components/SongDetails';
import SongEdit from './Components/SongEdit';
import SongNew from './Components/SongNew';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/songs/:id" element={<SongDetails />} />
            <Route path="/songs/:id/edit" element={<SongEdit />} />
            <Route path="/songs/new" element={<SongNew />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
