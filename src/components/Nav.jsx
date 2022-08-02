import {useState} from 'react';
import { BsHouseDoorFill, BsPersonCircle, BsTools, BsBriefcaseFill, BsCartFill, BsPhoneVibrateFill } from 'react-icons/bs';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [open, setOpen] = useState(false)
  
  const handleMenuContent = () => {
    setOpen(!open)
  };
  
  return (
    <nav className="shadow-lg bg-black lg:bg-transparent px-5 py-2 flex justify-between items-center fixed top-0 w-screen z-30">
      {/* menu button */}
      <button className="text-4xl cursor-pointer lg:hidden block" onClick={handleMenuContent}>
        {/* Icon when menu is closed. Heroicon name: outline/menu Menu open: "hidden", Menu closed: "block" */}
        <HiOutlineMenuAlt2 className={`h-6 w-6 ${open ? "hidden" : "block"}`}/>
      </button>

      {/* logo */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-4xl font-bold text-yellow-400">Philip Oyelegbin</h1>
      </div>

      {/* menu content */}
      <ul className={`fixed lg:flex lg:items-center lg:static bg-black lg:bg-transparent w-full lg:w-auto lg:py-0 py-4 top-10 md:top-14 transition-all ease-in-out duration-300 ${open ? 'left-0' : '-left-full'}`}>
        <li className="flex lg:flex-col mx-2 lg:mx-4 my-4 lg:my-0">
          <BsHouseDoorFill className='w-6 h-6 lg:mx-auto'/>
          <a href="#home" className="menuLink" onClick={handleMenuContent}>HOME</a>
        </li>
        <li className="flex lg:flex-col mx-2 lg:mx-4 my-4 lg:my-0">
          <BsPersonCircle className='w-6 h-6 lg:mx-auto'/>
          <a href="#about" className="menuLink" onClick={handleMenuContent}>ABOUT</a>
        </li>
        <li className="flex lg:flex-col mx-2 lg:mx-4 my-4 lg:my-0">
          <BsTools className='w-6 h-6 lg:mx-auto'/>
          <a href="#skills" className="menuLink" onClick={handleMenuContent}>SKILLS</a>
        </li>
        <li className="flex lg:flex-col mx-2 lg:mx-4 my-4 lg:my-0">
          <BsBriefcaseFill className='w-6 h-6 lg:mx-auto'/>
          <a href="#projects" className="menuLink" onClick={handleMenuContent}>PROJECTS</a>
        </li>
        <li className="flex lg:flex-col mx-2 lg:mx-4 my-4 lg:my-0">
          <BsCartFill className='w-6 h-6 lg:mx-auto'/>
          <a href="#service" className="menuLink" onClick={handleMenuContent}>SERVICE</a>
        </li>
        <li className="flex lg:flex-col mx-2 lg:mx-4 my-4 lg:my-0">
          <BsPhoneVibrateFill className='w-6 h-6 lg:mx-auto'/>
          <a href="#contact" className="menuLink" onClick={handleMenuContent}>CONTACT</a>
        </li>

        {/* Icon when menu is open. Heroicon name: outline/x Menu open: "block", Menu closed: "hidden" */}
        <FaTimes className={`h-6 w-6 mx-auto cursor-pointer lg:hidden ${open ? "block" : "hidden"}`} onClick={handleMenuContent}/>
      </ul>
    </nav>
  )
}

export default Nav