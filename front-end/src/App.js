import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'

import Edit from './Pages/Edit'
import Home from './Pages/Home'
import Error from "./Pages/Error"
import New from "./Pages/New"
import Show from "./Pages/Show"
import Index from "./Pages/Index"

import NavBar from "./Components/NavBar"

function App() {
  return (
    <div className="App">
       <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Index />} />
          <Route path="/songs/new" element={<New />} />
          <Route path="/songs/:id" element={<Show />} />
          <Route path="/songs/:id/edit" element={<Edit />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
