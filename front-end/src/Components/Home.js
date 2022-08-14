import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Welcome! This is the Tuner App</h1>
            <h3>Store tracks from your favorite artists!</h3>
            <h3>Edit Track Info and save your Favorites!</h3>
            <h5>Please, enjoy!</h5>
            <Link to='/songs'>Song Listings</Link>
        </div>
    )
}

export default Home