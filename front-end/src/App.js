import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexAllSongs from "./Components/IndexAllSongs";

function App() {
  return (
    <Router>
      <div className="">
          <h1>Tuner App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <IndexAllSongs />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
