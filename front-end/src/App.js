import { Routes, Route, useNavigate } from "react-router";
import NavBar from "./Components/NavBar";
import Songs from "./Pages/Songs";
import EditSong from "./Pages/EditSong";
import NewSong from "./Pages/NewSong";
import ShowSong from "./Pages/ShowSong";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function App() {
	const navigate = useNavigate();
	const deleteSong = (id) => {
		axios
			.delete(`${API}/songs/${id}`)
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="App">
			<header>
				<NavBar />
			</header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/songs" element={<Songs API={API} deleteSong={deleteSong} />} />
				<Route path="/songs/:id" element={<ShowSong API={API} deleteSong={deleteSong} />} />
				<Route path="/songs/new" element={<NewSong API={API} />} />
				<Route path="/songs/:id/edit" element={<EditSong API={API} />} />
				<Route path="/*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
