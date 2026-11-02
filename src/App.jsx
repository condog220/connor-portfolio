import React from "react";
import NavBar from "./components/NavBar"
import Main from "./components/Intro"
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <NavBar />
      <main>
        <Main />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;
