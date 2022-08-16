import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Nav from "./Components/Nav";
import Songs from "./Components/Songs";
import SongDetails from "./Components/SongDetails";
import SongEditForm from "./Components/SongEditForm";
import SongNewForm from "./Components/SongNewForm";
export default function App() {

//Dan and Adnan's work
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
        <Route path="/songs" element={<Songs/>}/>
        <Route path="/songs/:id" element={<SongDetails/>}/>
        <Route path="/songs/:id/edit" element={<SongEditForm/>}/>
        <Route path="/songs/new" element={<SongNewForm/>}/>
        </Routes>
      </Router>
    </div>
  );
}


