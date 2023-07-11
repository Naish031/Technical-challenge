import React, { useState } from "react";
import "../index.css";
import Logo from "../assets/Images/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const pressHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="py-8">
      {/* Left hand side of the Page - Logo/Symbol and Text */}
      <header className="bg-[#050718] flex items-center justify-between px-4">
        <div className="w-1/3 mx-3 flex justify-end lg:mx-0 lg:w-1/4">
          <img src={Logo} alt="company logo" />
        </div>
        <GiHamburgerMenu onClick={pressHandler} size={24} className="text-white cursor-pointer" />

        {showMenu && <div className="">
          <div className="flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center drop-shadow-lg">
            <a href="#">Home</a>
            <a href="#">How It Works</a>
            <a href="#">API Integration</a>
            <a href="#">FAQ</a>
          </div>
        </div>}

        {/* Center - Links */}
        <nav className="hidden md:flex items-center justify-center w-full">
          <ul className="flex justify-center text-white w-4/5 ">
            <li className="w-1/4 text-center">Home</li>
            <li className="w-1/4 text-center">How It Works?</li>
            <li className="w-1/4 text-center">API Integration</li>
            <li className="w-1/4 text-center">FAQ</li>
          </ul>
        </nav>

        {/* Right - Login and Signup */}

        <nav className="hidden md:flex items-center  justify-center w-1/4">
          <ul className="flex text-white justify-center ">
            <li className="py-2 mr-10">Login</li>
            <li className="">
              <button className="border border-white rounded-lg px-6 py-2">
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
