import React from "react";
import videoTypeImage from "../assets/Images/VideoTypeImage.png";
// import loremText from "../assets/Images/Lorem ipsum.png";
import sideArrow from "../assets/Images/buttonArrow.png";

const thirdPage = () => {
  return (
    <div className="bg-black w-full py-12 lg:py-36 flex flex-row justify-center">
      {/* WEBSITE IMAGE DESIGN */}
      <div className="hidden md:flex w-1/2 justify-center mx-4">
        <img src={videoTypeImage} alt="video" />
      </div>
      <div className="w-full lg:w-1/2 mx-4">
        <h1 className="text-white text-4xl font-bold text-center md:text-6xl md:text-left">
          Lorem{" "}
          <span className="text-transparent bg-gradient-to-r bg-clip-text from-[#3FE0FF] to-[#A060AE] block md:inline">
            {" "}
            ipsum!
          </span>
        </h1>
        <div className="lg:w-3/4">
          <p className="text-gray-300 text-center text-sm md:text-lg md:text-left mb-10 pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* MOBILE TEXT  */}
          <p className="md:hidden text-gray-300 text-center text-sm mb-7">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          {/* WEBISTE TEXT BUT HIDDEN */}
          <p className="hidden md:flex text-gray-300 text-lg mb-10">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        {/* MOBILE DIV ONLY */}
        <div className="md:hidden flex items-center justify-center">
          <button className="rounded-full bg-gradient-to-r from-purple-700 to-cyan-400 text-center text-white text-lg px-8 py-4 font-bold ml-2 ">
            Get Started
            <img
              src={sideArrow}
              alt="side-arrow"
              className="inline ml-4 mb-1"
            />
          </button>
        </div>
        {/* WEBSITE BUTTON */}
        <button className=" hidden md:flex rounded-full bg-gradient-to-r from-purple-700 to-cyan-400 text-center text-white text-lg px-8 py-4 font-bold ml-2 ">
          Get Started
          <img src={sideArrow} alt="side-arrow" className="inline ml-4 mb-1" />
        </button>

        {/* MOBILE IMAGE DESIGN */}
        <div className="md:hidden mt-16">
          <img src={videoTypeImage} alt="video" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default thirdPage;
