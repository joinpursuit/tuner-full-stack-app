import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import Show from "./Pages/Show";

import FourOFour from "./Pages/FourOFour";

// compnents
import NavBar from "./Components/NavBar";
import Index from "./Pages/Index";

function App() {
	return (
		<div>
			<Router>
				<NavBar />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="*" element={<FourOFour />} />
						<Route path="/songs" element={<Index />} />
						<Route path="/songs/:id" element={<Show />} />
					</Routes>
				</main>
			</Router>
		</div>
	);
}

export default App;
