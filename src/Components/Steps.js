import React from "react";
import stepBackground from "../assets/Images/stepsBackground.png";
import stepImage from "../assets/Images/StepsGroup.png";
import dubaiOne from "../assets/Images/dubai1.png";
import dubaiTwo from "../assets/Images/dubai2.png";
import dubaiThree from "../assets/Images/dubai3.png";
import mobileSteps from "../assets/Images/mobileStepsImage.png";

const Steps = () => {
  const backgroundStyle = {
    backgroundImage: `url(${stepBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };

  return (
    <div style={backgroundStyle}>
      <div className="flex justify-center pt-10 ">
        {/* Steps FOR MOBILE DEISGNS */}
        <div className="md:hidden">
          {Array.from({ length: 4 }).map((item, index) => {
            return (
              <div key={index} className="mb-4">
                <h1 className="text-white text-xl font-bold text-center mb-1">
                  Step {index + 1}
                </h1>
                <h2 className="text-white text-2xl font-bold text-center mb-2">
                  Lorem Ipsum
                </h2>
                <p className="text-[#D7D7D7] text-sm font-medium text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>

                {index !== 3 && (
                  <div className="flex justify-center">
                    <img src={mobileSteps} alt="steps" className="mt-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Card Steps Div FOR WEBSITE*/}

        <div className="hidden md:flex md:flex-col w-1/3 ">
          {Array.from({ length: 2 }).map((item, index) => {
            return (
              <div key={index} className={`pt-2 h-2/4 mb-32 ${index === 1 ? "mt-48":""}`}>
                <h3 className="text-white text-xl text-right font-extrabold mb-8">
                  Step {index === 0 ? 1 : 3}
                </h3>
                <h2 className="text-white text-3xl text-right font-extrabold mb-2">
                  Lorem Ipsum
                </h2>
                <p className="text-[#A6A9B8] text-lg font-normal text-right">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <br /> sed do eiusmod tempor incididunt ut labore et dolore{" "}
                  <br /> magna aliqua.{" "}
                </p>
              </div>
            );
          })}
        </div>

        <div className="hidden md:flex w-1/12 justify-center">
          <img src={stepImage} alt="steps" className=" h-full" />
        </div>

        <div className="hidden md:flex md:flex-col w-1/3">
          {Array.from({ length: 2 }).map((item, index) => {
            return (
              <div
                key={index}
                className={`h-2/4 ${index === 1 ? "mt-64 " : "mt-64 "}
                `
                
              }
              >
                <h3 className="text-white text-xl text-left font-extrabold mb-8">
                  Step {index === 0 ? 2 : 4}
                </h3>
                <h2 className="text-white text-3xl text-left font-extrabold mb-2">
                  Lorem Ipsum
                </h2>
                <p className="text-[#A6A9B8] text-lg font-normal text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <br /> sed do eiusmod tempor incididunt ut labore et dolore{" "}
                  <br /> magna aliqua.{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Next Part of the screen */}
      <div className="bg-[#171820] mx-3 mt-10 pt-10 lg:mx-0 lg:m-20 lg:mt-60 lg:rounded-xl lg:p-32">
        <h1 className="text-white text-center text-4xl lg:text-5xl font-bold pb-2">
          Lorem ipsum dolor sit amet consectetur{" "}
          <h1 className="hidden">adipiscing elit</h1>
        </h1>
        <p className="text-[#A6A9B8] pt-2 text-center text-sm lg:text-lg lg:pt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
          <span className="hidden">
            {" "}
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </span>{" "}
        </p>

        <div className="flex justify-center py-10 lg:pt-14">
          <button className="bg-gradient-to-r from-purple-600 to-blue-300 text-center text-white text-lg font-semibold py-4 px-8 rounded-full ">
            Contact Now
          </button>
        </div>
      </div>

      <div className="hidden md:flex md:items-center md:justify-center pt-0 lg:pt-10">
        <h1 className="text-white text-5xl text-center font-extrabold">
          Join the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-sky-300">
            #loremipsum
          </span>{" "}
          movement!
        </h1>
      </div>
      <div className="hidden md:flex flex-row justify-center mt-10 pb-20">
        {Array.from({ length: 3 }).map((item, index) => {
          return (
            <div key={index} className="border rounded-lg w-1/4 m-5">
              <img
                src={
                  index === 0 ? dubaiOne : index === 1 ? dubaiTwo : dubaiThree
                }
                alt="dubai new building"
                className="w-full p-3"
              />
              <p className="text-[#A6A9B8] p-3 text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Steps;
