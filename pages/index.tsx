import React, { FC } from "react";
import FirstPage from "@/components/first";
import SecondPage from "@/components/second";

import ThirdPage from "@/components/third";
import FourthPage from "@/components/four";
import FivethPage from "@/components/five";

const Home: FC = () => {


  

  return (
    <div className="app">
      <div className="container">
        <div className="content">
          <FirstPage />
        </div>

        <div className="content">
          <SecondPage />
          <ThirdPage />
          <FourthPage />
        </div>
      </div>
    </div>
  );
};

export default Home;
