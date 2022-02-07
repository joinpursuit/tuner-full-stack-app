import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import Song from "./components/Song";
import SongDetails from "./components/SongDetails";
import SongEditForm from "./components/SongEditForm";
import SongNewForm from "./components/SongNewForm";
import Songs from "./components/Songs";
import './App.css';

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/songs" element={<Songs />}/>
        <Route path="/song" element={<Song />}/>
        <Route path="/songs/:id" element={<SongDetails />}/>
        <Route path="/songs/:id/edit" element={<SongEditForm />}/>
        <Route path="/songs/new" element={<SongNewForm />}/>
      </Routes>
    </div>
  );
}

export default App;
