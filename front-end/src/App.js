// import all Components to App.js
import NavBar from "./Comonents/NavBar";
import Home from "./Pages/Home"
import Index from "./Pages/Index"
import Show from "./Pages/Show"
import Edit from "./Pages/Edit"
import New from "./Pages/New"
import FourOFour from "./Pages/FourOFour"
// enable dynamic routes to resourses
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//  create routes attached to the path from the URL to the element, which is the Component with data
function App() {
  return (
    <Router>
      <div className="">
        <NavBar />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Index />} />
          <Route path="/songs/:id" element={<Show/>} />
          <Route path="songs/:id/edit" element={<Edit />}/>
          <Route path='/songs/new' element={<New />}/>
          <Route path="*" element={<FourOFour />} />
        </Routes>
        </main>
      </div>
    </Router>
  );
}
// export App.js to output
export default App;