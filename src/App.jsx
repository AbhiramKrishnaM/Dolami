import { avatars } from "../public/assets/data";
import Avatar from "./components/AvatarCards";

function App() {
  const cards = avatars.map((avatar) => <Avatar key={avatar.id} {...avatar} />);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-screen">
      {cards}
    </div>
  );
}

export default App;
