import React, { FC, useState,useRef } from "react";
import styles from "/styles/Home.module.css";
import my_data from "./my_data.json";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialArticle, SocialProps } from "./article";

type idProps = "4" | "2" | "3"|null;

const FirstPage: FC = () => {
  const socials = my_data.social as SocialProps[];



  const [activeKey, setActiveKey] = useState<idProps>(null);

  function clickHandler(id: idProps) {
    if(id){
      const page = document.getElementById(id);
      page?.scrollIntoView({ behavior: "smooth" });
      if (!isNaN(Number(id))) {
        setActiveKey(id);
      }
    }
  
  }

  return (
    <div className="page" id="1">
      <div className={styles.first}>
        <main>
          <h2>Hi There!</h2>
          <h2>
            I'm <span>Bala</span>{" "}
          </h2>
          <label>Fullstack Js Developer</label>
          <p>
            A versatile Full Stack JavaScript developer, adept in creating
            dynamic web applications with a focus on Next.js. Skilled in both
            front-end and back-end development, delivering seamless user
            experiences.
          </p>
          <div className={styles.handler}>
            <span
              className={activeKey == "2" ? styles.active : ""}
              onClick={() => clickHandler("2")}
            >
              About Me
            </span>
            <span
              className={activeKey == "3" ? styles.active : ""}
              onClick={() => clickHandler("3")}
            >
              Resume
            </span>
            <span
              className={activeKey == "4" ? styles.active : ""}
              onClick={() => clickHandler("4")}
            >
              Portfolio
            </span>
          </div>

          <div className={styles.socials}>
            {socials.map((item, index) => {
              return <SocialArticle key={index} data={item} />;
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FirstPage;
