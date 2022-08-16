/** @format */

import { Link } from 'react-router-dom';
import '../index.css';

export default function NavBar() {
	return (
		<nav>
			<Link to='/songs'>
				<h1>Songs</h1>
			</Link>
			<button>
				<Link to='/songs/new'>New Song</Link>
			</button>
		</nav>
	);
}
