import { useState , useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.ico';
import Icon1 from '../assets/img/icon1.png';
import Icon2 from '../assets/img/icon2.png';
import Icon3 from '../assets/img/icon3.png';
import Icon4 from '../assets/img/icon4.png';

export const NavBar = () => {
  const[activeLink , setActiveLink] = useState('home');
  const[scrolled , setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
        if (window.scrollY > 50){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }
    window.addEventListener('scroll',onScroll);

    return () => window.removeEventListener('scroll',onScroll);
  },[])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": "" }>
      <Container>
        <Navbar.Brand href="#home">
            <img src = {logo} alt = "logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink==='project'?'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a  href='https://www.linkedin.com/in/anjanikumar13/' target="_blank"><img src = {Icon1} alt = ""  /></a>
                <a  href='https://www.instagram.com/anjani_1302/' target="_blank"><img src = {Icon2} alt = ""  /></a>
                <a  href='https://github.com/anjani-1305' target="_blank"><img src = {Icon3} alt = ""  /></a>
                <a  href='mailto:kanjani142@gmail.com' target="_blank"><img src = {Icon4} alt = ""  /></a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

