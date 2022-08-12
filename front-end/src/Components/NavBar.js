import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="primary">
        <Container>
          <Navbar.Brand href="/">Tuner App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/songs">Songs</Nav.Link>
            <Nav.Link href="/songs/new">New Song</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
