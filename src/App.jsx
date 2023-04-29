import { avatars } from "../public/assets/data";
import Avatar from "./components/AvatarCards";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const cards = avatars.map((avatar) => <Avatar key={avatar.id} {...avatar} />);

  return (
    <div className="w-screen">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full mt-3">
        {cards}
      </div>

      <Footer />
    </div>
  );
}

export default App;
