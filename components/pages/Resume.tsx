import React, { FC, useState } from "react";
import styles from "/styles/Home.module.css";
import { ResumeArticle } from "../article";

import myData from "../my_data.json";

const ThirdPage: FC = () => {
  const resumeData: { [key: string]: string[] } = myData.resume;
  const resumeDataKeys = Object.keys(resumeData);

  const MainArticle: FC = () => {
    return (
      <>
        <main className={styles.resume_details}>
          {resumeDataKeys.map((key) => {
            return (
              <ResumeArticle
                key={key}
                title={key}
                args={resumeData[key]}
              ></ResumeArticle>
            );
          })}
        </main>
      </>
    );
  };

  const HideArticleComponent: FC<{
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
  }> = ({ setShow }) => {
    const handler = () => {
      setShow((prev) => !prev);
    };

    return (
      <>
        <div className={styles.centerBox}>
          <h1>Nothing to Show </h1>
          <h2>Click Fetch to Get Details</h2>
          <button onClick={handler}>fetch</button>
        </div>
      </>
    );
  };

  return (
    <div className="page" id="3">
      <div className={styles.three}>
        <div className={styles.right_content}>
          <div className={styles.title_box}>
            <h1>Resume</h1>
          </div>
          <div className={styles.content_details}>
            <MainArticle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
