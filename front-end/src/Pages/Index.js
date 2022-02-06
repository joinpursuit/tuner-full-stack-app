import Songs from "../Components/Songs";

function Index() {
	return (
		<div className="detailsMain">
			<h2>Index</h2>
			<div className="songMapp">
				<div>Name</div>
				<div>Album</div>
				<div>Edit</div>
			</div>

			<Songs />
		</div>
	);
}

export default Index;
