import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Songs from "./Components/Songs";
import SongDetails from "./Components/SongDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <Router>
    <div className="">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/songs" element={<Songs/>}/>
        <Route path="/songs/:id" element={ <SongDetails />}/>
      </Routes> 
    </div>
    </Router>
  );
}

export default App;
