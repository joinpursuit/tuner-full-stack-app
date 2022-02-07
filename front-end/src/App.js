//dependencies
import { Routes, Route } from "react-router-dom";
//pages 
import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";
//components
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/songs" element={<Index/>}/>
          <Route path="/songs/new" element={<New/>}/>
          <Route exact path="/songs/:id" element={<Show/>}/>
          <Route path="/songs/:id/edit" element={<Edit/>}/>
          <Route path="*" element={<FourOFour/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;