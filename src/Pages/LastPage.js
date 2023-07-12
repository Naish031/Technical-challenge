import React from "react";
import Logo from "../assets/Images/Logo.png";
import facebookIcon from "../assets/Images/facebookIcon.png";
import linkedInIcon from "../assets/Images/linkedInIcon.png";
import twitterIcon from "../assets/Images/twitterIcon.png";
import flag from "../assets/Images/flag.png";
import arrow from "../assets/Images/arrowDown.png";

const LastPage = () => {
  return (
    <div className="bg-[#050718]">
      <div className="flex flex-col p-5 items-center md:items-start md:flex-row md:p-20">
        {/* logo div with text underneath */}
        <div className="w-full flex flex-col items-center md:w-2/5 md:items-start md:pl-10">
          <img src={Logo} alt="Company Logo" className="mb-4  " />
          <p className="w-full text-center md:text-left text-[#D7D7D7] mb-16">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed
            do <br />
            eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.
          </p>
        </div>

        <div className="md:w-1/6 ">
          <h3 className="text-white text-2xl font-semibold text-center md:text-left">
            Tools & API
          </h3>
          <ul className="text-[#A6A9B8] text-base py-4 text-center md:text-left">
            <li className="py-2">API Documentation</li>
            <li className="py-2">Integrations, tools & apps</li>
            <li className="py-2">Some Extension</li>
            <li className="py-2">Windows / Mac / Linux</li>
            <li className="py-2">Android App</li>
            <li className="py-2">Design Templates</li>
          </ul>
        </div>
        <div className=" md:w-1/6">
          <h3 className="text-white text-2xl font-semibold text-center md:text-left">
            Support
          </h3>
          <ul className="text-[#A6A9B8] text-base py-4 text-center md:text-left">
            <li className="py-2">Help & FAQs</li>
            <li className="py-2">Contact us</li>
            <li className="py-2">Refunds</li>
            <li className="py-2">Platform Status</li>
          </ul>
        </div>
        <div className="md:w-1/6">
          <h3 className="text-white text-2xl font-semibold text-center md:text-left">
            Company
          </h3>
          <ul className="text-[#A6A9B8] text-base py-4 text-center md:text-left">
            <li className="py-2">Blog</li>
            <li className="py-2">Affiliate Program</li>
            <li className="py-2">Some Other</li>
            <li className="py-2">Careers</li>
            <li className="py-2">About us</li>
            <li className="py-2">Press</li>
            <li className="py-2">Price</li>
          </ul>
        </div>
      </div>

      {/* Last Page Footer */}
      <div className="flex flex-col justify-center items-center pb-10 md:flex-row md:pb-20 md:justify-around ">
        <button className="text-white text-base font-medium px-2 py-1 border border-gray-700 mb-6 md:mb-0">
          <img src={flag} alt="country flag" className="inline mr-2" />
          English
          <img src={arrow} alt="arrow down" className="inline ml-2" />
        </button>

        <div className="flex flex-col-reverse items-center border-t-2 border-[#333] md:w-2/4 md:justify-between md:border-none md:flex-row ">
          <p className="text-[#A6A9B8] font-normal text-base mb-5 md:mb-0">
            Copyright @Loremipsum.com
          </p>

          {/* Linked Social Media Icons  */}
          <div className="flex flex-row my-10 md:my-0">
            <img src={facebookIcon} alt="facebook" className="mx-2" />
            <img src={linkedInIcon} alt="linkedIn" className="mx-2" />
            <img src={twitterIcon} alt="twitter" className="mx-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastPage;
