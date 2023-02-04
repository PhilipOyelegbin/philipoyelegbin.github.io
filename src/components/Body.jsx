import { useState } from 'react';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Feedback from './Feedback';
import Footer from './Footer';
import Hero from './Hero';
import Nav from './Nav';
import Projects from './Projects';
import Service from './Service';
import Skills from './Skills';
import Testimonial from './Testimonial';

const Body = () => {
  const [toggle, setToggle] = useState({showEducation: true, showSkill: false, showExperience: false,})
  return (
    <main>
      <Nav/>
      <Hero/>
      <About/>
      <div className="flex justify-center text-gray-800 gap-3 py-4">
        <p className='bg-slate-300 px-3 py-2 rounded-lg hover:shadow-md hover:shadow-gray-500 ' onClick={()=> setToggle({showEducation: true, showSkill: false, showExperience: false})}>Education</p>
        <p className='bg-slate-300 px-3 py-2 rounded-lg hover:shadow-md hover:shadow-gray-500 ' onClick={()=> setToggle({showEducation: false, showSkill: true, showExperience: false})}>Skills</p>
        <p className='bg-slate-300 px-3 py-2 rounded-lg hover:shadow-md hover:shadow-gray-500 ' onClick={()=> setToggle({showEducation: false, showSkill: false, showExperience: true})}>Experience</p>
      </div>
      {toggle.showEducation && <Education/>}
      {toggle.showSkill && <Skills/>}
      {toggle.showExperience && <Experience/>}
      <Projects/>
      <Service/>
      <Feedback/>
      <Testimonial/>
      <Footer/>
    </main>
  )
}

export default Body