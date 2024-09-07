import "./styles/app.scss"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Connect from "./components/Connect"
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Projects/>
    <Skills/>
    <Connect/>
    </>
  );
}

export default App;
