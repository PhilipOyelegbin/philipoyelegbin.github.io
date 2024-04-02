import { FaFacebook, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
import avatar from '../assets/profile.png'

const About = () => {
  return (
    <section id="about" className="px-5 py-10 flex flex-col-reverse xl:flex-row xl:justify-between xl:items-center gap-3 lg:px-20">
      <div className="flex flex-col text-justify xl:w-1/2">
        <h2>ABOUT ME</h2>

        <p>I'm a <strong>Support Specialist, Frontend Developer</strong>, and <strong>Cloud Engineer</strong> with a background in customer support and front-end development. I have proven skills in <strong>customer service, technical support, JavaScript, HTML5, CSS, React.js, cloud services</strong>, and <strong>Infrastructure as Code (IaC)</strong>. I'm experienced with <strong>Google Cloud Platform (GCP), Terraform</strong>, and <strong>Ansible</strong></p>.
        
        <p className="mt-3">I've served as a Robotics Instructor, demonstrating leadership and commitment to STEM education. I'm adaptable, collaborative, innovative, and eager to contribute to a dynamic team. I'm focused on providing website development solutions like:</p>
        <ul className="list-inside list-disc mt-3">
          <li>Cloud support and Infrastructure development</li>
          <li>Web app development</li>
          <li>Domain registration</li>
          <li>Website hosting, and more...</li>
        </ul>
      </div>
      
      <div className="xl:w-1/2">
        <img src={avatar} className="rounded-full mx-auto lg:w-2/5 xl:w-1/2 aspect-square" alt="profile_picture"/>

        <div className="mt-3 flex mx-auto w-fit px-4 py-2 rounded-full text-slate-300">
          <a className="mx-3" href="https://linkedin.com/in/PhilipOyelegbin" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='w-6 h-6'/></a>

          <a className="mx-3" href="https://mobile.facebook.com/philip.oyelegbin" target="_blank" rel="noopener noreferrer"><FaFacebook className='w-6 h-6'/></a>

          <a className="mx-3" href="https://mobile.twitter.com/OyelegbinPhilip" target="_blank" rel="noopener noreferrer"><FaTwitter className='w-6 h-6'/></a>

          <a className="mx-3" href="https://github.com/PhilipOyelegbin" target="_blank" rel="noopener noreferrer"><FaGithub className='w-6 h-6'/></a>
        </div>
      </div>
    </section>
  )
}

export default About
