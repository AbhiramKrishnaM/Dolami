import { avatars } from "../public/assets/data";

function App() {
  const Cards = avatars.map((avatar) => (
    <img src={avatar.url} key={avatar.id} />
  ));
  return Cards;
}

export default App;
