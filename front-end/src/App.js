import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New"
import Show from "./Pages/Show";

import NavBar from "./Components/NavBar";




function App() {
  return (
    <div className="App">
    <NavBar />
     <main>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/songs" element={<Index />} />
         <Route path="/songs/new" element={<New />} />
         <Route exact path="/songs/:id" element={<Show />} />
       </Routes>
     </main>
    </div>
  );
}

export default App;
