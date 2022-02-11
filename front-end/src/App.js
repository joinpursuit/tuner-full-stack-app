// DEPENDENCIES
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// PAGES
import Home from "./pages/Home.js";
import Index from "./pages/Index.js";
import Edit from "./pages/Edit.js";
import New from "./pages/New.js";
import Show from "./pages/Show.js"

// COMPONENTS
import NavBar from "./components/NavBar.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/songs" element = {<Index />} />
            <Route path = "/songs/new" element = {<New />} />
            <Route path = "/songs/:id" element = {<Show />} />
            <Route path = "/songs/:id/edit" element = {<Edit />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
