import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, About, History, Contact, Volunteer } from "./pages";
import Header from "./pages/Header";
import { Footer } from "./pages/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
