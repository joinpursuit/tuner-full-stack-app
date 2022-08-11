//Dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import NavBar from "./Components/NavBar";

//Pages
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
      <h1>Tuner App</h1>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/songs" element={<Index />} />
          {/* the more specific routes come before wildcard routes which is why New comes before Show */}
          <Route path="/songs/new" element={<New />} />
          <Route path="/songs/:id" element={<Show />} />
          <Route path="/songs/:id/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
