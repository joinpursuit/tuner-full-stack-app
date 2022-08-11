import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/songs'>Songs</Link>
        </div>
    );
};

export default NavBar;