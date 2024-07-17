import React, { FC } from "react";
import FirstPage from "@/components/first";
import SecondPage from "@/components/second";
import SideBar from "@/components/sidebar";
import ThirdPage from "@/components/third";
import FourthPage from "@/components/four";
import FivethPage from "@/components/five";

const Home: FC = () => {
  return (
    <div className="app">
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FivethPage />
    </div>
  );
};

export default Home;
