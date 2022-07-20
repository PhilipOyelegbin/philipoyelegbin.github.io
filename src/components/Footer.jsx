import React from 'react';
import { FaFacebook, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-600 font-light flex flex-col justify-center py-5 md:flex-row md:justify-between">
      {/* container holding the footer contact links */}
      <div className="flex w-fit text-slate-300 mx-auto">
        <a className="mx-3" href="https://linkedin.com/in/PhilipOyelegbin" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='w-6 h-6'/></a>

        <a className="mx-3" href="https://mobile.facebook.com/philip.oyelegbin" target="_blank" rel="noopener noreferrer"><FaFacebook className='w-6 h-6'/></a>

        <a className="mx-3" href="https://mobile.twitter.com/OyelegbinPhilip" target="_blank" rel="noopener noreferrer"><FaTwitter className='w-6 h-6'/></a>

        <a className="mx-3" href="https://github.com/PhilipOyelegbin" target="_blank" rel="noopener noreferrer"><FaGithub className='w-6 h-6'/></a>
      </div>

      <small className="mt-3 md:mt-0 mx-auto text-[16px]">&copy; 2022 MoonShot :: All Right Resevered.</small>
    </footer>
  )
}

export default Footer