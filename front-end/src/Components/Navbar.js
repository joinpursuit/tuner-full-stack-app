import { Link } from "react-router-dom";
import { Button, Icon, Header, Segment, Menu } from 'semantic-ui-react'

export default function NavBar() {
  return (
    <nav>
      <Segment clearing inverted>
        <Header as="h1" floated="left" inverted color='green'>
          <Menu.Item as={Link} to="/songs">Tuner</Menu.Item>
        </Header>
        <Header as="h1" floated="right">
          <Button animated as={Link} to="/songs/new" inverted color='green'>
            <Button.Content visible>New Song</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </Header>
      </Segment>
    </nav>
  );
}
