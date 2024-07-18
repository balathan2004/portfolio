import React, { FC, useState } from "react";
import styles from "/styles/Home.module.css";

import myData from "./my_data.json";

interface AboutPage {
  title: string;
  name: string;
  designation: string;
  summary: string;
}

const SecondPage: FC = () => {
  const [aboutData, setAboutData] = useState<AboutPage>(myData.about);

  return (
    <div className="page" id="2">
      <div className={styles.second}>
        <div className={styles.right_content}>
          <div className={styles.title_box}>
            <h1>{aboutData.title}</h1>
          </div>
          <div className={styles.content}>
            <main>
              <h1>
                I'm<span className={styles.name}> {aboutData.name},</span>{" "}
               
              </h1>
              <h2 className={styles.job}> {aboutData.designation}</h2>
              <p>{aboutData.summary}</p>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
