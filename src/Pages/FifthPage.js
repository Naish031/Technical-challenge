import React from "react";
import arrow from "../assets/Images/NewArrow.png";

const FifthPage = () => {
  return (
    <div className="bg-[#171820] flex flex-col lg:flex-row pt-24 pb-20 lg:pb-20  ">
      <div className="lg:w-1/2">
        <div className="flex flex-col items-center lg:w-3/4 lg:ml-16">
          <h1 className="text-white text-4xl text-center lg:text-left lg:text-6xl font-semibold">
            Frequently <p className="mt-1 lg:mt-4">Asked Questions</p>
          </h1>

          {/* Mobile TEXT/PARAGRAPH */}
          <p className="md:hidden text-[#A6A9B8] text-lg text-center mt-4 mx-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
          </p>

          {/* WEBSITE PARAGRAPH */}
          <p className="hidden md:flex text-[#A6A9B8] text-lg font-normal mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore et dolore
            <br /> magna aliqua.{" "}
          </p>
        </div>

        {/* Mobile List (Asked Questions) */}
        <div className="my-6 md:hidden">
          {Array.from({ length: 4 }).map((item, index) => {
            return (
              <>
                <div
                  className={`flex justify-between px-3 mx-2 py-3 border-b-2 ${
                    index !== 3 ? "border-[#333]" : "border-none"
                  } `}
                >
                  <p className="text-white text-base font-semibold">
                    Tell me your customer support?
                  </p>
                  <img
                    key={index}
                    src={arrow}
                    alt="arrow sign"
                    className={` mt-1 ${
                      index !== 3 ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
              </>
            );
          })}
        </div>
        <p className="md:hidden text-sm text-[#d7d7d7] text-left mx-5">
          Frankly, it's the best in the business and we'll back that up with
          references from our clients moves at the speed of your business. Our
          Trainers and operations teams offer support in multiple time zones.
        </p>
      </div>

      {/* Customer Support Lists for WEBSITE*/}
      <div className="hidden md:flex w-1/2 mr-10">
        <div>
          {Array.from({ length: 6 }).map((item, index) => {
            return (
              <div
                key={index}
                className={` border-b-4 border-gray-800 w-3/4 p-5 rounded-xl mb-2  ${
                  index !== 5
                    ? " border-transparent "
                    : "bg-gradient-to-r from-purple-700 to-cyan-400 transform hover:scale-105 cursor-pointer"
                }`}
              >
                <p className="text-white text-2xl font-medium text-center">
                  Lorem ipsum dolor sit amet, consectetur?
                  <img
                    key={index}
                    src={arrow}
                    alt="arrow sign"
                    className={`float-right mt-1 ${
                      index !== 5 ? " transform rotate-180" : ""
                    }`}
                  />
                </p>
              </div>
            );
          })}
          <p className="text-[#D7D7D7] text-lg font-normal w-3/4 pl-4 pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FifthPage;
