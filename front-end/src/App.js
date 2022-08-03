import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from './Pages/Home.js';
import FourOFour from "./Pages/FourOFour.js";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Drafted Routes Below!!! */}
          {/* <Route path="/songs" element={<Index />} />
          <Route path="/songs/new" element={<New />} />
          <Route path="/songs/:index" element={<Show />} />
          <Route path="/songs/:index/edit" element={<Edit />} /> */}

          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
