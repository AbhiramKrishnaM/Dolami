import { avatars } from "../public/assets/data";
import AvatarCard from "./components/AvatarCards";

function App() {
  const Cards = avatars.map((avatar) => (
    <AvatarCard key={avatar.id} {...avatar} />
  ));
  return Cards;
}

export default App;
