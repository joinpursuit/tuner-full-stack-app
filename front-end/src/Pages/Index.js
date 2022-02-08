import Songs from "../Components/Songs.js";
import { Header, Image } from 'semantic-ui-react';
import Pic from "../assets/ayeyaiyai.jpeg";

function Index() {
  return (
    <div className="Index">
      <Header as='h2'>
        <Image circular src={Pic} />Hector's Jams VOL. 1
      </Header>
      <Songs />
    </div>
  );
}

export default Index;