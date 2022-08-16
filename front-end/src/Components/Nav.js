import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <div>
      <Navbar className="color-nav" variant="dark">
        <Container>
          <Navbar.Brand href="/"><h1>Tuner App</h1></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  href="/songs"><h3>Songs</h3></Nav.Link>
            <Nav.Link  href="/songs/new"><h3>New Song</h3></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;