import React, { FC, useState, useRef, useEffect } from "react";
import styles from "/styles/Home.module.css";
import my_data from "../my_data.json";

import { SocialArticle, SocialProps } from "../article";

type idProps = "4" | "2" | "3" | null;

const Intro: FC = () => {
  const socials = my_data.social as SocialProps[];

  const [activeKey, setActiveKey] = useState<idProps>(null);

  const [lastUpdated, setLastUpdated] = useState("");

  function clickHandler(id: idProps) {
    if (id) {
      const page = document.getElementById(id);
      page?.scrollIntoView({ behavior: "smooth" });
      if (!isNaN(Number(id))) {
        setActiveKey(id);
      }
    }
  }

  const getLastUpdated = () => {
    fetch(
      "https://api.github.com/repos/balathan2004/portfolio/commits?path=components/my_data.json",
    )
      .then((res) => res.json())
      .then((data) => {
        const lastUpdated = data[0].commit.committer.date;
        const time = new Date(lastUpdated);
        const now = new Date();
        const diffMs = now.getTime() - time.getTime();
        const diffMinutes = Math.floor(diffMs / (1000 * 60));
        let display = "";

        if (diffMinutes < 60) {
          display = `${diffMinutes} minutes ago`;
        } else if (diffMinutes < 1440) {
          display = `${Math.floor(diffMinutes / 60)} hours ago`;
        } else {
          display = `${Math.floor(diffMinutes / 1440)} days ago`;
        }
        console.log(display);
        setLastUpdated(display);
      });
  };

  useEffect(() => {
    getLastUpdated();
  }, []);

  return (
    <div className="page" id="1">
      <div className={styles.first}>
        <main>
          <h2>Hi There!</h2>
          <h2>
            I'm <span>Bala</span>{" "}
          </h2>
          <label>
            Mobile & Full-Stack Developer | Kotlin, React Native, TypeScript
          </label>
          <p>
            Android and React Native developer focused on building performant
            mobile applications using Kotlin, Jetpack Compose, and TypeScript.
            Experienced in developing native modules to bridge platform-specific
            functionality with React Native, enabling seamless integration
            between native Android and cross-platform code. Skilled in creating
            scalable, responsive, and maintainable mobile architectures.
          </p>
          <span>1+ Years Professional Experience</span>
          <div className={styles.handler}>
            <span
              className={activeKey == "2" ? styles.active : styles.intro_span}
              onClick={() => clickHandler("2")}
            >
              About Me
            </span>
            <span
              className={activeKey == "3" ? styles.active : styles.intro_span}
              onClick={() => clickHandler("3")}
            >
              Resume
            </span>
            <span
              className={activeKey == "4" ? styles.active : styles.intro_span}
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
          <span>Last Updated {lastUpdated}</span>
        </main>
      </div>
    </div>
  );
};

export default Intro;
