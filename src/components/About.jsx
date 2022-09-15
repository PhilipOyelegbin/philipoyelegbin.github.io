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

            <p>React Developer Philip Kehinde Oyelegbin, better known by his stage as Philip Oyelegbin, is based in Lagos, Nigeria. He is currently employed as a Robotics Instructor at WiFi Combat Academy, where he instructs kids and teenagers in a variety of technical subjects. Philip has a solid history in HVAC System Maintenance and a strong maintenance culture. He graduated from Yaba College of Technology with a degree in Industrial Maintenance Engineering.</p>
            
            <p>Philip is a huge fan of artificial intelligence and is incredibly enthusiastic about the tech industry. He is constantly eager to collaborate with other developers and form connections with other brilliant minds.</p>

            <p className="mt-3">He is focused on providing website development solutions like:</p>
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