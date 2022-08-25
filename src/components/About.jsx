import { FaFacebook, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
import avatar from '../assets/avatar.jpg'

const About = () => {
  return (
    <section id="about" className="bg-gray-700 py-10">
      <div className="container mx-auto px-5">
        <div className="md:flex md:flex-flow md:justify-between items-center">
          <div className="md:w-1/2 md:mr-2">
            <img src={avatar} className="rounded-lg mx-auto w-72 md:w-96 h-72 md:h-96" alt="profile_picture"/>

            <div className="mt-3 flex mx-auto w-fit px-4 py-2 rounded-full text-slate-300">
              <a className="mx-3" href="https://linkedin.com/in/PhilipOyelegbin" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='w-6 h-6'/></a>

              <a className="mx-3" href="https://mobile.facebook.com/philip.oyelegbin" target="_blank" rel="noopener noreferrer"><FaFacebook className='w-6 h-6'/></a>

              <a className="mx-3" href="https://mobile.twitter.com/OyelegbinPhilip" target="_blank" rel="noopener noreferrer"><FaTwitter className='w-6 h-6'/></a>

              <a className="mx-3" href="https://github.com/PhilipOyelegbin" target="_blank" rel="noopener noreferrer"><FaGithub className='w-6 h-6'/></a>
            </div>
          </div>

          <div className="flex flex-col text-justify md:w-1/2 md:h-[450px] md:overflow-y-scroll">
            <h2>ABOUT ME</h2>

            <p>Hi, I am <strong>Philip Oyelegbin.</strong> a graduate of Industrial Maintenance Engineering from Yaba College of Technology. My transition to tech started in 2020 during COVID-19 through my lecturer <strong>Dr Samson Oloketuyi</strong> who introduced me to programming. I have exposed myself to various aspect of tech ranging from desktop app development using Tkinter and PyQt, frontend web development using (HTML, CSS and JavaScript), backend web development using Flask a python framework, UI/UX design using Figma, data science using Python, networking using Cisco Packet Traser and artificial intelligence using Python. Yes, you can say I am a lover of python 😇</p>

            <p className="mt-3">I decided to major in frontend engineering after the journey of exposure which has been instrumental on my decision making. Therefore, focused on providing website development solutions like:</p>

            <ul className="list-inside list-disc mt-3">
              <li>Landing page</li>
              <li>School portal</li>
              <li>Hospital health management system</li>
              <li>E-commerce website</li>
              <li>Domain registration</li>
              <li>Website hosting, and more</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About