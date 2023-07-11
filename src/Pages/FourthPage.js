import React from "react";
import fourthPageScreen from "../assets/Images/fourthPageScreen.png";
import iconOne from "../assets/Images/Icon(1).png";
import iconTwo from "../assets/Images/Icon(2).png";
import iconThree from "../assets/Images/Icon(3).png";
import iconFour from "../assets/Images/Icon(4).png";
import iconFive from "../assets/Images/Icon(5).png";
import iconSix from "../assets/Images/Icon(6).png";
import mobileIconOne from "../assets/Images/mobileICON(1).png";
import mobileIconTwo from "../assets/Images/mobileICON(2).png";
import mobileIconThree from "../assets/Images/mobileICON(3).png";

// import Steps from "../Components/Steps";

const FourthPage = () => {
  const divStyle = {
    backgroundImage: `url(${fourthPageScreen})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    // Adjust the height as per your requirements
  };
  return (
    <div style={divStyle}>
      <div className="flex flex-col py-14 items-center lg:py-36">
        <div className="flex flex-col text-center">
          <h1 className="text-white text-4xl text-center font-bold lg:text-5xl">
            Lorem ip
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-400">
              su
            </span>
            m dolor sit amet
          </h1>
          <p className="text-gray-300 text-center mt-5 mx-4 text-xs lg:mx-0 lg:text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        {/* Div CARDS For MOBILE SCREEN */}
        <div className="flex flex-row mt-12 flex-wrap justify-center ">
          {Array.from({ length: 3 }).map((item, index) => {
            return (
              <div
                className={`flex flex-col items-center justify-center px-4 py-5 mx-3 my-3 rounded-lg ${
                  index === 0
                    ? "bg-gradient-to-r from-[#3FE0FF] to-[#A709FD]"
                    : "bg-gray-900 border"
                }`}
              >
                <img
                  src={
                    index === 0
                      ? mobileIconOne
                      : index === 1
                      ? mobileIconTwo
                      : index === 2
                      ? mobileIconThree
                      : index === 3
                  }
                  alt="Mobile Icons"
                  className="py-3"
                />
                <p className="text-xl text-white text-center py-1">
                  Lorem Ipsum
                </p>
                <p className="text-base text-white mt-2 mb-4 text-center">
                  Lorem ipsum dolor sit amer please consider this as dummy text
                  only
                </p>
              </div>
            );
          })}
        </div>

        {/* Cards DIV FOR WEBSITE */}
        {/* <div className="flex flex-row mt-28 flex-wrap justify-center ">
          {Array.from({ length: 6 }).map((item, index) => {
            return (
              <div
                className={`flex flex-col items-center justify-center p-14  m-10 w-1/4 ${
                  index === 0
                    ? "bg-gradient-to-r from-[#3FE0FF] to-[#A709FD]"
                    : "bg-gray-900"
                } `}
              >
                <img
                  src={
                    index === 0
                      ? iconOne
                      : index === 1
                      ? iconTwo
                      : index === 2
                      ? iconThree
                      : index === 3
                      ? iconFour
                      : index === 4
                      ? iconFive
                      : iconSix
                  }
                  alt="Tv Icon"
                />
                <p className="text-2xl text-white">Lorem</p>
                <p className="text-lg text-white mt-1">
                  Lorem ipsum dolor sit amer please consider this as dummy text
                  only
                </p>
              </div>
            );
          })}
        </div> */}

        {/* SECOND PART OF SCREEN */}
        <div className="mt-12 w-4/5 lg:mt-28 lg:w-full">
          <h1 className="text-white text-4xl font-extrabold text-center lg:text-5xl">
            <span className="text-gradient bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text">
              Lorem Ipsum
            </span>{" "}
            Process Explained
          </h1>
          <p className="text-center text-[#D7D7D7] mt-5 text-xs px-3 lg:px-0 lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      {/* <Steps /> */}
    </div>
  );
};

export default FourthPage;
