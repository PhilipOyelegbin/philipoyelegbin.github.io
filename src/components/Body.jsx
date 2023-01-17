import About from './About';
import Feedback from './Feedback';
import Footer from './Footer';
import Hero from './Hero';
import Nav from './Nav';
import Projects from './Projects';
import Service from './Service';
import Skills from './Skills';
import Testimonial from './Testimonial';

const Body = () => {
  return (
    <>
        <Nav/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Service/>
        <Feedback/>
        <Testimonial/>
        <Footer/>
    </>
  )
}

export default Body