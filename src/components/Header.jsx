import { navbarMenu } from "../mockData/data.js";
import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="md:flex lg:block">
        <div className="md:hidden flex justify-end items-center lg:w-1/5">
          <button
            className="text-[#FA6E00] focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        <div>
          <div>
            {isOpen && (
              <ul className="flex flex-col justify-center items-center gap-5 mb-4">
                {navbarMenu.map((item) => (
                  <li key={item.id} className="text-lg text-[#959595]">
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* Mobile view: menu first, logo second */}
        <div className="md:hidden flex flex-col items-center mb-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent">
            Kovith
          </h1>
        </div>

        {/* Main header layout for md and above */}
        <header className="my-8 flex justify-between items-center">
          {/* Logo for desktop */}
          <div className="lg:w-1/5 hidden md:flex justify-center items-center">
            <h1 className="lg:order-1 order-2 text-4xl font-bold bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent">
              Kovith
            </h1>
          </div>

          {/* Desktop navbar */}
          <div className="lg:w-3/5 hidden md:flex justify-center items-center">
            <ul className="flex justify-center items-center gap-5">
              {navbarMenu.map((item) => (
                <li key={item.id} className="mx-5 text-lg text-[#959595]">
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/5"></div>

          {/* Menu toggle for mobile */}
        </header>
      </div>
    </>
  );
}

export default Header;
