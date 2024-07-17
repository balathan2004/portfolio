import React, { FC } from "react";
import styles from "/styles/Home.module.css";

const FirstPage: FC = () => {
  return (
    <div className="page" id="1">
      <div className={styles.first}>
        <div className={styles.left}>
          <main>
            <h2>Hi There!</h2>
            <h2>I'm <span>Bala</span> </h2>
            <label>Fullstack Js Developer</label>
            <p>
              Enthusiastic Full-stack JavaScript Developer with strong skills in
              front-end (React) and back-end (NextJs, Express.js) development.
              Knowledgeable in Firebase, MongoDB, and SQL. Experienced in
              personal projects. Eager to learn, and passionate about creating
              efficient, user-friendly web applications
            </p>
            <button>About Me</button>
          </main>
        </div>
        <div className={styles.right}>
        
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
