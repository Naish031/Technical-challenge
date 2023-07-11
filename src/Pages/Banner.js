import React from "react";
import "../index.css";
import backgroundBanner from "../assets/Images/backgroundBanner.png";
import Header from "../Components/Header";
import Sticker from "./Sticker";
import uploadFolder from "../assets/Images/uploadFolder.png";
import mobileFolder from "../assets/Images/mobileUpload.png";
// import mobileBackground from '../assets/Images/mobileFirstBackground.png'

const Banner = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    // Adjust the height as per your requirements
  };

  return (
    <>
      <div style={divStyle}>
        <Header />

        {/* Big Text */}
        <div className="hidden text-center mt-12">
          <h1 className="text-white text-6xl font-bold">
            Lorem ipsum dolor sit <br />
            consectetur Blockchain
          </h1>
        </div>

        {/* Mobile Screen TEXT */}
        <div className="text-center mt-12 px-5">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
            Lor<span className="bg-gradient-to-r text-transparent from-blue-400 to-purple-400 bg-clip-text">em</span> ipsum dolor <br />
            sit consectetur <span className="bg-gradient-to-r text-transparent from-blue-400 to-purple-400 bg-clip-text">Blockchain</span>
          </h1>
        </div>

        {/* text input and text FOR WEBSITE */}
        <div className="flex flex-col items-center mt-12 ">
          <div className="hidden w-2/5 h-12 rounded-3xl border border-white bg-transparent px-1 text-white text-base justify-between ">
            <input
              type="text"
              placeholder="Enter Id Here"
              className="border-none bg-transparent text-start pl-3 w-3/6"
            />
            <input
              type="text"
              placeholder="Or Upload A Photo To Search"
              className="border-none bg-transparent text-end h-auto w-3/6"
            />
            <img src={uploadFolder} alt="" className="ml-3 p-0" />
          </div>

          {/* For Mobile Screen INPUT FIELDS */}
          <div className="flex flex-col items-center w-full">
            <input
              type="text"
              placeholder="Type or Paste a URL"
              className="border-none bg-transparent text-start text-sm placeholder-black pl-3 w-5/6 bg-white rounded-full h-14"
            />
            <div className="flex justify-center items-center pl-3 w-5/6 rounded-full h-14 mt-6 bg-gradient-to-r from-blue-400 to-purple-600">
              <img src={mobileFolder} alt="" className="h-5" />
              <input
                type="text"
                placeholder="Or Upload An Image"
                className="placeholder-white bg-transparent text-sm text-center py-4 "
              />
            </div>
          </div>

          <div className="w-5/6 mt-12 text-white text-sm lg:text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua
          </div>
        </div>
        <Sticker />
      </div>
    </>
  );
};

export default Banner;
