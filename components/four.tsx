import React, { FC } from "react";
import styles from "/styles/Home.module.css";
import myData from "./my_data.json";
import { ProjectArticle, projectProps } from "./article";

const FourthPage: FC = () => {
  const projectData: projectProps[] = myData.projects;

  return (
    <div className="page" id="4">
      <div className={styles.four}>
        <div className={styles.right_content}>
          <div className={styles.title_box}>
            <h1> PortFolio</h1>
          </div>
          <div className={styles.content}>
            <div className={styles.content_title}>
              <h1>Project Built by me</h1>
            </div>
            <div className={styles.content_details}>
              {projectData.map((item,index) => {
                return <ProjectArticle key={index} data={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
