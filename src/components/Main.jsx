import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';
import Nav from './Nav';
import Projects from './Projects';
import Service from './Service';
import Skills from './Skills';

const Main = () => {
  return (
    <>
        <Nav/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Service/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Main