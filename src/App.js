import "./styles/app.scss"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Connect from "./components/Connect"
import Contact from "./components/Contact"
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Skills/>
    <Projects/>
    <Connect/>
    <hr/>
    <Contact/>
    </>
  );
}

export default App;
