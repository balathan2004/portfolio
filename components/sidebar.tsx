import React, { FC } from "react";
import styles from "/styles/Home.module.css";

const SideBar: FC = () => {
  function clickHandler(id: string) {
    const page = document.getElementById(id);
    page?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={"sidebar"}>
      <img src="https://i.pinimg.com/564x/88/db/ab/88dbab24462e13f95406aef6752f3cd5.jpg"></img>

      <ul>
        <li onClick={() => clickHandler("1")}> Home</li>
        <li onClick={() => clickHandler("2")}>About Me</li>
        <li onClick={() => clickHandler("3")}>Resume</li>
        <li onClick={() => clickHandler("4")}>Portfolio</li>
        <li onClick={() => clickHandler("5")}>contact</li>
      </ul>
    </div>
  );
};

export default SideBar;
