import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

// PAGES
import Home from './Pages/Home.js';
import FourOFour from "./Pages/FourOFour.js";
import Index from "./Pages/Index.js"
import Show from "./Pages/Show.js";
import New from "./Pages/New.js";
import Edit from "./Pages/Edit.js";

// COMPONENTS
import NavBar from "./Components/NavBar.js";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Index />} />
          <Route path="/songs/:id" element={<Show />} />
          <Route path="/songs/new" element={<New />} />
          <Route path="/songs/:id/edit" element={<Edit />} /> 
          <Route path="*" element={<FourOFour />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
