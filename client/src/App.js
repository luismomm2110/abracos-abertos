import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/History";
import Contact from "./pages/Contact";
import Volunteer from "./pages/Volunteer";
import Student from "./pages/Student";
import ListVolunteers from "./pages/ListVolunteers";
import ListStudents from "./pages/ListStudents";

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
        <Route path="/listavoluntarios" element={<ListVolunteers />} />
        <Route path="/listaestudantes" element={<ListStudents />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
