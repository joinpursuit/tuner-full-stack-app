import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <div className="">
      <Router>
        <NavBar/>
      <h1>Tuner App</h1>
        <Routes>
          <Route/> 

        </Routes>
      </Router>
    </div>
  );
}

export default App;
