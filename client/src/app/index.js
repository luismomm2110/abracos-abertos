import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AppWrapper } from "./styles";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import About from "../pages/About";
import History from "../pages/History";
import Contact from "../pages/Contact";
import Volunteer from "../pages/Volunteer";
import Student from "../pages/Student";
import ListVolunteers from "../pages/ListVolunteers";
import EditVolunteer from "../pages/ListVolunteers/EditVolunteer.js";
import ListStudents from "../pages/ListStudents";
import EditStudent from "../pages/ListStudents/EditStudent.js";
import Admin from "../pages/Admin/Login.js";
import AdmControl from "../pages/Admin/Control";

function App() {
  const [isFixed, setIsFixed] = useState(true);

  const handleFooterBottom = (isFixed) => {
    setIsFixed(isFixed);
  };

  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Home isFooterFixed={handleFooterBottom} />} />
        <Route
          path="about"
          element={<About isFooterFixed={handleFooterBottom} />}
        />
        <Route path="/history" element={<History />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/student" element={<Student />} />
        <Route path="/control/listavoluntarios" element={<ListVolunteers />} />
        <Route path="/control/listaestudantes" element={<ListStudents />} />
        <Route
          path="control/listavoluntarios/editarvoluntario/:id"
          element={<EditVolunteer />}
        />
        <Route
          path="control/listaestudantes/editarestudante/:id"
          element={<EditStudent />}
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/control" element={<AdmControl />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer isFixed={isFixed} />
    </AppWrapper>
  );
}

export default App;
