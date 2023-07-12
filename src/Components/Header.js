import React, { useState } from "react";
import "../index.css";
import Logo from "../assets/Images/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const pressHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="py-8">
      {/* Left hand side of the Page - Logo/Symbol and Text */}
      <header className="bg-[#050718] flex items-center justify-between px-4 md:bg-transparent">
        <div className="w-1/3 mx-3 flex justify-end lg:mx-0 lg:w-1/4">
          <img src={Logo} alt="company logo" />
        </div>
        <GiHamburgerMenu
          onClick={pressHandler}
          size={24}
          className="text-white cursor-pointer md:hidden"
        />
        {/* The Menu Button (Clicked) Lists */}
        {showMenu && (
          <div className="w-10/12 absolute top-0 right-0 h-full flex flex-col items-end py-6 space-y-2 text-lg font-bold bg-white md:hidden">
            <ImCross
              onClick={pressHandler}
              size={24}
              className="cursor-pointer absolute top-3 left-3 "
            />
            <a href="/" className="hover:text-xl hover:text-[#A6A9B8]">
              Home
            </a>
            <a href="/" className="hover:text-xl hover:text-[#A6A9B8]">
              How It Works
            </a>
            <a href="/" className="hover:text-xl hover:text-[#A6A9B8]">
              API Integration
            </a>
            <a href="/" className="hover:text-xl hover:text-[#A6A9B8]">
              FAQ
            </a>
          </div>
        )}

        {/* Center - Links */}
        <nav className="hidden md:flex items-center justify-center w-full">
          <ul className="flex justify-center text-white w-4/5 ">
            <li className="w-1/4 text-center md:text-sm xl:text-lg ">Home</li>
            <li className="w-1/4 text-center md:text-sm xl:text-lg">How It Works?</li>
            <li className="w-1/4 text-center md:text-sm xl:text-lg">API Integration</li>
            <li className="w-1/4 text-center md:text-sm xl:text-lg">FAQ</li>
          </ul>
        </nav>

        {/* Right - Login and Signup */}

        <nav className="hidden md:flex items-center  justify-center w-1/4">
          <ul className="flex text-white justify-center ">
            <li className="py-2 mr-10 md:text-sm xl:text-lg">Login</li>
            <li className="">
              <button className="border border-white rounded-lg px-6 py-2 md:text-sm xl:text-lg">
                Signup
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
