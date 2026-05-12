import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dynamic Route */}
        <Route path="/movies:id" element={<MovieDetail />} />

        {/* Not Found */}
        <Route path="/movies/:id" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
  );
}
      
export default App;