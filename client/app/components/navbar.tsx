'use client';
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white border-b-2 text-[#000] py-4 px-6 flex items-center justify-between shadow-md">
      <Link href="/" legacyBehavior>
        <a className="flex items-center">
          <img src="/logo.png" alt="mockInterview Logo" className="w-10 h-10 mr-4" />
          <span className="text-xl"><span className='font-bold'>Mock</span> Interview</span>
        </a>
      </Link>

      <nav className={`space-x-6 flex`}>
        <div className={`hidden md:flex gap-5`}>
        <Link href="/#course" className={`hidden md:block`} legacyBehavior>
          <p className="hover:text-gray-600 hover:cursor-pointer pt-1">Learn More</p>
        </Link>
        <Link href="/#course" className={`hidden md:block`} legacyBehavior>
          <p className="hover:text-gray-600 hover:cursor-pointer border-[3px] p-1 border-[#BA932F] font-bold">Explore Course List</p>
        </Link>
        </div>
        <Link href="/interview">
          <p className="hover:text-gray-800 text-black p-1 px-2 bg-[#BA932F] font-bold">Interview</p>
        </Link>
        {/* <Link href="/login">
          <p className="hover:text-gray-600 text-black p-1 px-2 bg-[#BA932F] font-bold">Login/Signup</p>
        </Link> */}
      </nav>

      {/* <button
        className={`md:hidden ${isOpen ? 'hidden' : ''}`}
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button> */}
    </header>
  );
}

export default Navbar;