import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import FiturPage from "./pages/FiturPage";
import BlogPage from "./pages/BlogPage";
import TentangPage from "./pages/TentangPage";
import KontakPage from "./pages/KontakPage";
import VideoPage from "./componentspage/VideoPage";
import KontenSatu from "./konten/KontenSatu";
import KontenDua from "./konten/KontenDua";
import KontenTiga from "./konten/KontenTiga";

import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import BlogEditor from "./admin/BlogEditor";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fitur" element={<FiturPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/tentang" element={<TentangPage />} />
        <Route path="/kontak" element={<KontakPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/kontensatu" element={<KontenSatu />} />
        <Route path="/kontendua" element={<KontenDua />} />
        <Route path="/kontentiga" element={<KontenTiga />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/blog-editor" element={<BlogEditor />} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
