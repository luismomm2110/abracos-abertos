import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home, About, History, Contact, Volunteer } from "./pages";
import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/History";
import Contact from "./pages/Contact";
import Volunteer from "./pages/Volunteer";
import Student from "./pages/Student";
import Footer from "./components/Footer";

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
        <Route path="/student" element={<Student />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
