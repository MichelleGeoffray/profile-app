
//import About from "./components/About";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import "./App.css";
//import image_man from "./assets/headshot-man.png";
//import image_woman from "./assets/headshot-woman.png";
//import Card from "./components/Card";
//import Wrapper from "./components/Wrapper";
//import { useState } from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
//import ProfileForm from "./components/ProfileForm";
//import { useEffect } from "react";
//import { use } from "react";
import AddProfilePage from "./pages/AddProfilePage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => {
  //Variable to store the mode state
  const [mode, setMode] = useState("light");
  //function to update the mode state
  const handleModeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <HashRouter>
      <header>
        <Navbar mode={mode} updateMode={handleModeChange}/>
      </header>
      <main className={mode === "light" ? "light" : "dark"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/add-profile" element={<AddProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </HashRouter>
  );
};

export default App;
