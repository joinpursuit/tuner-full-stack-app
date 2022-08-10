import './App.css';
import React from 'react';
import Home from './Components/Home';
import NavBar from './Components/NavBar'
import Songs from './Components/Songs';
import Song from './Components/Song';
import SongDetails from './Components/SongDetails';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/songs' element={<Songs />}/>
        </Routes>
      </main>
    </Router>
      
    </div>
  );
}

export default App;
