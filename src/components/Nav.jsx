import {useState} from 'react';
import { BsHouseDoorFill, BsPersonCircle, BsTools, BsBriefcaseFill, BsCartFill, BsFillChatDotsFill } from 'react-icons/bs';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [open, setOpen] = useState(false)
  
  const handleMenuContent = () => {
    setOpen(!open)
  };
  
  return (
    <header className="shadow-lg bg-black lg:bg-opacity-60 px-5 py-2 flex justify-between items-center fixed top-0 w-screen z-30 lg:px-10">
      {/* menu button */}
      <button className="text-4xl cursor-pointer lg:hidden block" onClick={handleMenuContent}>
        {/* Icon when menu is closed. Heroicon name: outline/menu Menu open: "hidden", Menu closed: "block" */}
        <HiOutlineMenuAlt2 className={`h-6 w-6 ${open ? "hidden" : "block"}`}/>
      </button>

      {/* logo */}
      <div className="flex justify-between items-center">
        <h1 className="logo text-2xl md:text-4xl font-bold text-yellow-400">Philip Oyelegbin</h1>
      </div>

      {/* menu content */}
      <nav className={`fixed lg:flex lg:items-center lg:static bg-black lg:bg-transparent w-full lg:w-auto py-4 lg:py-0 top-10 md:top-14 transition-all ease-in-out duration-300 ${open ? 'left-0' : '-left-full'}`}>
        <ul className='flex flex-col gap-7 lg:flex-row'>
          <li className="flex lg:flex-col mx-2 lg:mx-4">
            <BsHouseDoorFill className='w-6 h-6 lg:mx-auto'/>
            <a href="#home" className="menuLink" onClick={handleMenuContent}>HOME</a>
          </li>
          <li className="flex lg:flex-col mx-2 lg:mx-4">
            <BsPersonCircle className='w-6 h-6 lg:mx-auto'/>
            <a href="#about" className="menuLink" onClick={handleMenuContent}>ABOUT</a>
          </li>
          <li className="flex lg:flex-col mx-2 lg:mx-4">
            <BsBriefcaseFill className='w-6 h-6 lg:mx-auto'/>
            <a href="#projects" className="menuLink" onClick={handleMenuContent}>PROJECTS</a>
          </li>
          <li className="flex lg:flex-col mx-2 lg:mx-4">
            <BsCartFill className='w-6 h-6 lg:mx-auto'/>
            <a href="#service" className="menuLink" onClick={handleMenuContent}>SERVICE</a>
          </li>
          <li className="flex lg:flex-col mx-2 lg:mx-4">
            <BsFillChatDotsFill className='w-6 h-6 lg:mx-auto'/>
            <a href="#testimonial" className="menuLink" onClick={handleMenuContent}>TESTIMONIAL</a>
          </li>

          {/* Icon when menu is open. Heroicon name: outline/x Menu open: "block", Menu closed: "hidden" */}
          <FaTimes className={`h-6 w-6 mx-auto cursor-pointer lg:hidden ${open ? "block" : "hidden"}`} onClick={handleMenuContent}/>
        </ul>
      </nav>
    </header>
  )
}

export default Nav