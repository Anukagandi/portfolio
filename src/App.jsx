import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Progress from "./components/Progress"; // Use the actual file name
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Links from "./components/links";
import Tags from "./components/Tags";
import Copyright from "./components/Copyright";

function App() {
  return (
    <div className="bg-[#616161]">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Links />
      <Tags />
      <Copyright />
    </div>
  );
}

export default App;
