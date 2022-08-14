// import all Components to App.js
import Home from "./Comonents/Home";
import NavBar from "./Comonents/NavBar";
import Songs from "./Comonents/Songs";
import SongDetails from "./Comonents/SongDetails";
import SongEditForm from "./Comonents/SongEditForm";
import SongNewForm from "./Comonents/SongNewForm";

// enable dynamic routes to resourses 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//  create routes attached to the path from the URL to the element, which is the Component with data
function App() {
  return (
    <Router>
      <div className="">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/songs/:id" element={<SongDetails/>} />
          <Route path="songs/:id/edit" element={<SongEditForm />}/>
          <Route path='/songs/new' element={<SongNewForm />}/>
        </Routes>
      </div>
    </Router>
  );
}

// export App.js to output 
export default App;
