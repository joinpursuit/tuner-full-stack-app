import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap'

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/Songs">Songs</Link>
      </h1>
      <Button>
        <Link to="/songs/new">New Songs</Link>
      </Button>
    </nav>
  );
}
