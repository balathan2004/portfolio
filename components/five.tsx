import React, { FC } from "react";
import styles from "/styles/Home.module.css";
import my_data from "./my_data.json";
import { SocialProps, SocialArticle } from "./article";

const FivethPage: FC = () => {
  const socialData = my_data.social as SocialProps[];

  return (
    <div className="page" id="5">
      <div className={styles.five}>
        <div className={styles.right_content}>
          <div className={styles.title_box}>
            <h1>Social</h1>
          </div>
          <div className={styles.content}>
            <div className={styles.content_desc}>
              <h1>Feel free to contact me</h1>
            </div>
            <div className={styles.content_icons}>
              {socialData.map((item,index) => {
                return <SocialArticle key={index} data={item} />;
              })}
            </div>
            <a className={styles.lastButton} href="/api/for_devs">For Developers</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FivethPage;
