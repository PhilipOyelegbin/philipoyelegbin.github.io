import {useState} from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [open, setOpen] = useState(false)

  const handleMenuContent = () => {
    setOpen(!open)
  };

  open ? document.getElementById("root").classList.add("fixed") : document.getElementById("root").classList.remove("fixed")

  return <header>
    {/* logo */}
    <div className="flex justify-between items-center">
      <h1 className="logo text-xl md:text-2xl font-bold text-slate-200">{"(Philip Oyelegbin) =>"}</h1>
    </div>

    {/* menu button */}
    <button className="text-4xl cursor-pointer lg:hidden block" onClick={handleMenuContent}>
      {/* Icon when menu is closed. Heroicon name: outline/menu Menu open: "hidden", Menu closed: "block" */}
      <HiOutlineMenuAlt3 className={`h-6 w-6 ${open ? "hidden" : "block"}`}/>
    </button>

    {/* menu content */}
    <nav className={open ? 'right-0' : '-right-full'}>
      <ul>
        <li>
          <a href="#about" className="menuLink" onClick={handleMenuContent}>About</a>
        </li>
        <li>
          <a href="#qualifications" className="menuLink" onClick={handleMenuContent}>Qualifications</a>
        </li>
        <li>
          <a href="#projects" className="menuLink" onClick={handleMenuContent}>Projects</a>
        </li>
        <li>
          <a href="#feedback" className="menuLink" onClick={handleMenuContent}>Feedback</a>
        </li>

        {/* Icon when menu is open. Heroicon name: outline/x Menu open: "block", Menu closed: "hidden" */}
        <FaTimes className={`h-6 w-6 mx-auto cursor-pointer lg:hidden ${open ? "block" : "hidden"}`} onClick={handleMenuContent}/>
      </ul>
    </nav>
  </header>
}

export default Nav