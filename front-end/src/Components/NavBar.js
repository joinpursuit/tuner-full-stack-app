import { Link } from "react-router-dom";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";


export default function NavBar() {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Typography variant="h4" noWrap component={Link} to="/songs" sx={{flexGrow:1, textDecoration: "none", color:"white"}}>
            Songs
          </Typography>
        <Button component={Link} to="/songs/new"  variant="outlined" sx={{ my: 2, color: 'white', display: 'block', outlineColor:"white" }}>New Song</Button>
        </Toolbar>
      </Container>
   </AppBar>
  )
}


