"use client";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaChevronCircleLeft, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = usePathname();

  const handleMenuContent = () => {
    setOpen(!open);
  };

  return (
    <header>
      {/* logo */}
      <div className='flex justify-between items-center'>
        <Link
          href='/auth'
          className='logo text-xl md:text-2xl font-bold text-slate-200'
        >
          {"(Philip Oyelegbin) =>"}
        </Link>
      </div>

      {/* menu button */}
      <button
        className={`${
          navigate.includes("dashboard") && "hidden"
        } text-4xl cursor-pointer lg:hidden block`}
        onClick={handleMenuContent}
      >
        {/* Icon when menu is closed. Heroicon name: outline/menu Menu open: "hidden", Menu closed: "block" */}
        <HiOutlineMenuAlt3 className={`h-6 w-6 ${open ? "hidden" : "block"}`} />
      </button>

      {/* logout icon */}
      <Link
        href='/'
        className={`${
          !navigate.includes("dashboard") && "hidden"
        } flex gap-1 items-center text-red-700 text-2xl`}
      >
        <FaChevronCircleLeft />
      </Link>

      {/* menu content */}
      <nav
        className={
          open
            ? "right-0"
            : "-right-full" && navigate.includes("dashboard") && "hidden"
        }
      >
        <ul>
          <li>
            <Link
              href='#about'
              className='menuLink'
              onClick={handleMenuContent}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href='#qualifications'
              className='menuLink'
              onClick={handleMenuContent}
            >
              Qualifications
            </Link>
          </li>
          <li>
            <Link
              href='#projects'
              className='menuLink'
              onClick={handleMenuContent}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href='#feedback'
              className='menuLink'
              onClick={handleMenuContent}
            >
              Feedback
            </Link>
          </li>

          {/* Icon when menu is open. Heroicon name: outline/x Menu open: "block", Menu closed: "hidden" */}
          <FaTimes
            className={`h-6 w-6 mx-auto cursor-pointer lg:hidden ${
              open ? "block" : "hidden"
            }`}
            onClick={handleMenuContent}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
