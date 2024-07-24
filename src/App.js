import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sociallinks from "./components/Sociallinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";




function App() {
  return (
    <div>
     <Navbar/>
     <Home/> 
     <Sociallinks/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
    
    </div>
  );
}

export default App;
