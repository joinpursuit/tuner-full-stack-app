import Home from "./Comonents/Home";
import NavBar from "./Comonents/NavBar";
import Songs from "./Comonents/Songs";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SongDetails from "./Comonents/SongDetails";

function App() {
  return (
    <Router>
      <div className="">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/songs/:id" element={<SongDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
