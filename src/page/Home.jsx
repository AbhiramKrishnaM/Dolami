import { avatars } from "../../public/assets/data";
import Avatar from "../components/AvatarCards";
import Sidenavbar from "../components/Sidenavbar";

function Home() {
  const cards = avatars.map((avatar) => <Avatar key={avatar.id} {...avatar} />);

  return (
    <div>
      {/* <div className="sticky top-1/2 translate-y-[250px] translate-x-1/2 bottom-0 bg-red-100 w-[50%] z-50 p-5 rounded-xl shadow-xl">
          <Sidenavbar />
        </div> */}

      <Sidenavbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full ">
        {cards}
      </div>
    </div>
  );
}

export default Home;
