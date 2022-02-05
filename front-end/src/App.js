import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import Index from "./Pages/Index";
import FourOFour from "./Pages/FourOFour";
import New from "./Pages/New";

// compnents
import NavBar from "./Components/NavBar";

function App() {
	return (
		<div>
			<Router>
				<NavBar />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/songs" element={<Index />} />
						<Route path="/songs/:id" element={<Show />} />
						<Route path="/songs/new" element={<New />} />
						<Route path="*" element={<FourOFour />} />
					</Routes>
				</main>
			</Router>
		</div>
	);
}

export default App;
