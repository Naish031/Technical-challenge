import React from "react";
import backgroundImage from "../assets/Images/SixBackgroundImage.png";

const SixPage = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    // Adjust the height as per your requirements
  };
  return (
    <div style={divStyle}>
      <div className="flex lg:flex-row py-10 lg:py-20 justify-center">
        <div className="lg:w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-white text-center text-4xl lg:text-6xl font-bold">
            Reach out to
            <p className="lg:mt-4">
              Lor
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A060AE] to-[#46E1FF] mr-2">
                em
              </span>
              Ipsum{" "}
            </p>
          </h1>
          <div className="mt-6 mb-10">
            <p className="text-[#A6A9B8] text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
            </p>
            <p className="text-white text-base font-medium text-center mt-4">
              info@loremipsum.com
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="bg-gray-900 bg-opacity-60 lg:w-4/5">
              <h2 className="text-white text-center text-3xl px-10 py-3 pt-6 font-bold">
                Contact
              </h2>
              <div className="my-7 flex justify-center items-center">
                <input
                  type="text"
                  className="bg-transparent pl-2 py-3 border border-white mr-3 w-2/5"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="bg-transparent pl-2 py-3 border border-white w-2/5"
                  placeholder="Last Name"
                />
              </div>

              <div className="my-5 flex justify-center items-center">
                <input
                  type="email"
                  className="bg-transparent w-5/6 pl-4 py-3 border border-white"
                  placeholder="Email"
                />
              </div>
              <div className=" flex justify-center items-center">
                <textarea
                  type="text"
                  className="bg-transparent w-5/6 pl-4 pt-4 h-40 border border-white"
                  placeholder="Message"
                />
              </div>
              <div className="mt-10 mx-10 pb-10 flex justify-center items-center">
                <button className="text-white bg-gradient-to-r from-fuchsia-700 to-sky-300 px-9 py-4 rounded-full font-semibold">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* WEBSITE DESIGN (BELOW) */}
        {/* <div className="lg:w-1/2 flex justify-center items-center">
          <div className="bg-gray-900 bg-opacity-60 lg:w-4/5">
            <h2 className="text-white text-3xl px-10 py-3 pt-6 font-bold">
              Contact
            </h2>
            <div className="my-7 mx-10">
              <input
                type="text"
                className="bg-transparent pl-4 py-3 border border-white mr-3 w-2/5"
                placeholder="First Name"
              />
              <input
                type="text"
                className="bg-transparent pl-4 py-3 border border-white w-2/5"
                placeholder="Last Name"
              />
            </div>

            <div className="my-5 mx-10">
              <input
                type="email"
                className="bg-transparent w-4/5 pl-4 py-3 border border-white"
                placeholder="Email"
              />
            </div>
            <div className="mx-10">
              <textarea
                type="text"
                className="bg-transparent w-4/5 pl-4 pt-4 h-40 border border-white"
                placeholder="Message"
              />
            </div>
            <div className="mt-10 mx-10 pb-10">
              <button className="text-white bg-gradient-to-r from-fuchsia-700 to-sky-300 px-9 py-4 rounded-full font-semibold">
                Send Message
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* WEBSITE TEXT (BELOW) */}
      <div className="hidden w-1/2 flex items-center justify-center pb-20">
        <p className="text-white text-2xl font-medium">info@loremipsum.com</p>
      </div>
    </div>
  );
};

export default SixPage;
