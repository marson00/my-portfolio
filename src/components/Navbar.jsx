import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMedicineBox,
  AiOutlineMenu,
} from "react-icons/ai";

function Navbar() {
  const navigations = [
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Stacks", path: "#stacks" },
    { name: "Contact", path: "#contact" },
  ];

  const [nav, setNav] = useState(false);
  const toggleNavBar = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed z-100 w-full font-bold flex justify-center">
      {/* Navbar - Large Size */}
      <div className="hidden md:flex justify-center m-4 px-2 border border-white/20 backdrop-blur-3xl rounded-full">
        <ul className="flex flex-row space-x-8 p-2">
          {navigations.map((nav, i) => (
            <li key={i}>
              <a
                href={nav.path}
                className="hover:skew-x12 hover:text-violet-200 duration-300 ease-in-out transition-colors"
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar - Small Size (Expand & Collapse) */}
      <div
        onClick={toggleNavBar}
        className="block md:hidden absolute top-5 right-14 border border-white/70 p-2 z-100 rounded"
      >
        {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

      {/* Navbar - Side bar */}
      <div
        className={`fixed left-0 top-0 w-full h-full bg-[#202420]/90 transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <ul className="flex flex-col justify-center items-center space-y-10 h-full">
          {navigations.map((nav, i) => (
            <li key={i}>
              <a href={nav.path} onClick={toggleNavBar} className="hover:skew-x12 hover:text-violet-200 duration-300 ease-in-out transition-colors text-4xl">
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
        here
      </div>
    </div>
  );
}

export default Navbar;
