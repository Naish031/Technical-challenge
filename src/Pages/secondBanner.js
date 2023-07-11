import React from "react";
import secondBackgroundImage from "../assets/Images/secondBackgroundImage.png";
// import textSecond from "../assets/Images/textSecond.png";
import secondScreenImage from "../assets/Images/secondScreenImage.png";

const secondBanner = () => {
  const divStyle = {
    backgroundImage: `url(${secondBackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    // Adjust the height as per your requirements
  };
  return (
    <div style={divStyle} className="py-10 lg:py-40">
      <div className="flex flex-row">
        {/* This div is w-1/2 in web */}
        <div className="mt-14 flex flex-col items-center ">
          <div className="flex flex-col items-center">
            <h1 className="text-white text-center lg:text-left text-4xl lg:text-6xl font-bold w-4/5">
              Lorem{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3FE0FF] to-[#A060AE]">
                ipsum
              </span>{" "}
              <br />
              dolor sit amet
            </h1>
            <p className="text-white text-center lg:text-left text-sm lg:text-2xl mt-4 w-10/12 lg:mt-8 lg:w-3/5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="hidden text-white text-2xl mt-3 w-3/5">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </p>
          </div>
          {/* MOBILE SCREEN DESIGN */}
          <div className="mt-10 flex flex-col items-center">
            <img
              src={secondScreenImage}
              alt="Dubai view"
              className="w-5/6 h-60"
            />
            <p className="text-white w-4/5 text-center text-sm lg:text-lg mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>

        {/* WEBSITE TEXT BELOW PLUS IMAGE */}
        <div className="hidden w-1/2 mt-24 flex flex-col items-center">
          <img src={secondScreenImage} alt="Dubai view" className="w-3/4" />
          <p className="text-white w-3/5 text-center text-sm lg:text-lg mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default secondBanner;
