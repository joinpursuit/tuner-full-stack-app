import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";

import FourOFour from "./Pages/FourOFour";

// compnents
import NavBar from "./Components/NavBar";

function App() {
	return (
		<div className="">
			<Router>
				<NavBar />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="*" element={<FourOFour />} />
					</Routes>
				</main>
			</Router>
		</div>
	);
}

export default App;
