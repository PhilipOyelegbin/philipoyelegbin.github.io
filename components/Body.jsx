import { lazy, useState, useTransition } from 'react';
import About from './About';
import Education from './Education';
import Feedback from './Feedback';
import Footer from './Footer';
import Hero from './Hero';
import Nav from './Nav';
import Projects from './Projects';
import Service from './Service';
import Testimonial from './Testimonial';

const Skills = lazy(() => import('./Skills'));
const Experience = lazy(() => import('./Experience'));

const Body = () => {
  const [isPending, startTransition] = useTransition()
  const [toggle, setToggle] = useState({showEducation: true, showSkill: false, showExperience: false,})

  return (
    <main>
      <Nav/>
      <Hero/>
      <About/>
      <div className="flex justify-center text-gray-800 gap-3 py-4">
        <p role="tab" className={`bg-slate-300 px-3 py-2 rounded-lg cursor-pointer ${toggle.showEducation === true && "bg-yellow-500 text-slate-200"}`} onClick={()=> setToggle({showEducation: true, showSkill: false, showExperience: false})}>Education</p>
        <p role="tab" className={`bg-slate-300 px-3 py-2 rounded-lg cursor-pointer ${toggle.showSkill === true && "bg-yellow-500 text-slate-200"}`} onClick={() => startTransition(() => setToggle({showEducation: false, showSkill: true, showExperience: false}))}>Skills</p>
        <p role="tab" className={`bg-slate-300 px-3 py-2 rounded-lg cursor-pointer ${toggle.showExperience === true && "bg-yellow-500 text-slate-200"}`} onClick={() => startTransition(() => setToggle({showEducation: false, showSkill: false, showExperience: true}))}>Experience</p>
      </div>
      {isPending && <p className="text-center">Loading...</p>}
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
