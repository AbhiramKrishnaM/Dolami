import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidenavbar from "./components/Sidenavbar";

import Home from "./page/Home";
import Specific from "./page/avatar/Specific";

function App() {
  return (
    <>
      <Navbar />
      <Sidenavbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/avatar/:id" element={<Specific />}></Route>
      </Routes>
    </>
  );
}

export default App;
