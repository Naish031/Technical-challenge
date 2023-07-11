import React from "react";
import "../index.css";
import headIcon from "../assets/Images/headIcon.png";
import warningIcon from "../assets/Images/warningIcon.png";
import profileIcon from "../assets/Images/profileIcon.png";
// import stickerBackground from "../assets/Images/stickerBackground.png";

const Sticker = () => {
  return (
    <div className="mt-40 bg-gradient-to-r from-[rgb(63,224,255)] via-[rgb(129,87,254)] to-[rgb(167,9,253)] border border-none rounded-md">
      <div className="flex flex-col justify-center items-center space-y-4 p-4">
        <div className="flex items-center space-x-4 py-4 ml-4">
          <img src={headIcon} alt="head icon" className="w-1/5" />
          <p className="text-white text-base font-medium w-2/5">
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="flex items-center space-x-4 py-4 ml-5">
          <img src={warningIcon} alt="warning icon" className="w-1/5" />
          <p className="text-white text-base font-medium w-2/5">
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="flex items-center space-x-4 py-4 ml-6">
          <img src={profileIcon} alt="profile icon" className="w-1/5" />
          <p className="text-white text-base font-medium w-2/5">
            Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sticker;
