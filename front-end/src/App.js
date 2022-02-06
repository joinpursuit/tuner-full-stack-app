import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Song from "./components/Song"
import NewSong from "./components/NewSong"
import EditSong from "./components/EditSong"
import AllSongs from "./components/AllSongs"
import Four0Four from './components/Four0Four'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/songs" element={<AllSongs />}/>
            <Route path="/songs/:id" element={<Song />}/>
            <Route path="/songs/:id/edit" element={<EditSong />}/>
            <Route path="/songs/new" element={<NewSong />}/>
            <Route path="*" element={<Four0Four />}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
