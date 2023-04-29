import { avatars } from "./assets/data";
import Avatar from "./components/AvatarCards";

function App() {
  const cards = avatars.map((avatar) => <Avatar key={avatar.id} {...avatar} />);

  return <div className="grid grid-cols-3 gap-3">{cards}</div>;
}

export default App;
