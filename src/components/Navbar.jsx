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
    <a href="mailto:gargbhoomi01@gmail.com">
      <button>Resume</button>
    </a>
  </>)

}
export default Navbar
