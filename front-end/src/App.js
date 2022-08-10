import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Songs from './Components/songs'
import Home from './Components/Home'
import IndividualTrack from './Components/IndividualTrack';
import EditTrack from './Components/EditTrack'

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/songs' element={<Songs/>}/>
          <Route path='/songs/:id' element={<IndividualTrack/>}/>
          <Route path='/songs/edit' element={<EditTrack/>}/>
        </Routes>
      </Router>
      <h5>Tuner App</h5>
    </div>
  );
}

export default App;
