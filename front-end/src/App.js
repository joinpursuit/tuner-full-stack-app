import { Routes, Route } from "react-router";
import NavBar from "./Components/NavBar";
import Songs from "./Pages/Songs";
import EditSong from "./Pages/EditSong";
import NewSong from "./Pages/NewSong";
import ShowSong from "./Pages/ShowSong";
import Home from "./Components/Home";

function App() {
	return (
		<div className="App">
			<header>
				<NavBar />
			</header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/songs" element={<Songs />} />
				<Route path="/songs/:id" element={<ShowSong />} />
				<Route path="/songs/new" element={<NewSong />} />
				<Route path="/songs/:id/edit" element={<EditSong />} />
			</Routes>
		</div>
	);
}

export default App;
