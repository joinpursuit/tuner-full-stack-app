import { Link } from "react-router-dom"
import { Navbar, Container, Button, Nav } from "react-bootstrap";

export default function NavBar(){
    return (
        // <nav>
        //     <h1>
        //         <Link to="/songs">Songs</Link>
        //     </h1>
        //     <button>
        //         <Link to ="songs/new"> New Song</Link>
        //     </button>
        // </nav>
        <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/songs">Tuner API 🎶</Navbar.Brand>
            <Nav className="float-right">
              <Button variant="outline-primary" href="/songs/new">
                New Song
              </Button>{" "}
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
}