import React from 'react'
import '../styles/Navbar.scss';
const Navbar = () => {
  return (<nav>
    <NavContent />
  </nav>);
};
const NavContent = () => {
  return (<>
    <h2>Bhoomi</h2>
    <div>
      <a href="#home">Home</a>
      <a href="#skills">Skills</a>
      <a href="#project">Projects</a>
      <a href="#connect">Connect</a>
      <a href="#contact">Contact</a>
    </div>
    <a href="https://drive.google.com/file/d/18TNyUHGQ57GHQWvMJF73-LahC9XuRsdk/view?usp=sharing" target="_blank">
      <button>Resume</button>
    </a>
  </>)

}
export default Navbar
