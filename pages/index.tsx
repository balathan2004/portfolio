import React, { FC } from "react";
import SecondPage from "@/components/pages/About";
import ThirdPage from "@/components/pages/Resume";
import FourthPage from "@/components/pages/Portfolio";
import Intro from "@/components/pages/Intro";

const Home: FC = () => {
  return (
    <div className="app">
      <div className="container">
        <div className="content">
          <Intro />
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
