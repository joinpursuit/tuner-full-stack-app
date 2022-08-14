import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from './Pages/Home.js';
import FourOFour from "./Pages/FourOFour.js";
import Index from "./Pages/Index.js"
import Show from "./Pages/Show.js";

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
          <Route path="/songs/:index" element={<Show />} />
          {/* Drafted Routes Below!!! 
          <Route path="/songs/new" element={<New />} />
          
          <Route path="/songs/:index/edit" element={<Edit />} /> */}

          <Route path="*" element={<FourOFour />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
