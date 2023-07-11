import React from "react";
import Banner from "./Pages/Banner";
// import Sticker from "./Pages/Sticker";
import SecondBanner from './Pages/secondBanner'
import ThirdPage from "./Pages/thirdPage";
import FourthPage from "./Pages/FourthPage";
import Steps from "./Components/Steps";
import FifthPage from "./Pages/FifthPage";
import SixPage from "./Pages/SixPage";
import LastPage from "./Pages/LastPage";


const App = () => {
  return (
    <>
      <Banner />
      <SecondBanner />
      <ThirdPage />
      <FourthPage />
      <Steps />
      <FifthPage />
      <SixPage />
      <LastPage />
    </>
  );
};

export default App;
