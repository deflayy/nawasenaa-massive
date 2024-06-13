import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import FiturPage from "./pages/FiturPage";
import BlogPage from "./pages/BlogPage";
import TentangPage from "./pages/TentangPage";
import KontakPage from "./pages/KontakPage";
import VideoPage from "./componentspage/VideoPage";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/fitur" Component={FiturPage} />
        <Route path="/blog" Component={BlogPage} />
        <Route path="/tentang" Component={TentangPage} />
        <Route path="/kontak" Component={KontakPage} />
        <Route path="/video" Component={VideoPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
