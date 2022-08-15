import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Songs from './Components/songs'
import Home from './Components/Home'
import IndividualTrack from './Components/IndividualTrack';
import EditTrack from './Components/EditTrack'
import NewTrack from './Components/NewTrack';
import NavBar from './Components/NavBar';
import './App.css'

function App() {
  return (
    <div className="">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/songs' element={<Songs/>}/>
          <Route path='/songs/:id' element={<IndividualTrack/>}/>
          <Route path='/songs/edit' element={<EditTrack/>}/>
          <Route path='/new' element={<NewTrack/>}/>
        </Routes>
      </Router>
      <h5>Tuner App</h5>
    </div>
  );
}

export default App;
