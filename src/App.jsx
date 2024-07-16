import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Courses from "./components/Courses";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <main className="min-h-screen border-x-8 border-light-border dark:border-dark-border bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text ">
        <Hero />
        <Projects />
        <Skills />
        <Courses />
      </main>
      <Footer />
    </div>
  );
}

export default App;
