import React, { FC, useState } from "react";
import styles from "/styles/Home.module.css";
import quotes from "./quotes.json";
import myData from "./my_data.json";

interface Quote {
  quote: string;
  author: string;
}

interface AboutPage {
  title: string;
  name: string;
  designation: string;
  summary: string;
}

const SecondPage: FC = () => {
  const [quote, setQuote] = useState<Quote>(quotes[0]);

  const [aboutData, setAboutData] = useState<AboutPage>(myData.about);

  console.log(quotes);
  function changeQuote() {
    const newIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[newIndex]);
  }

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
                <span className={styles.job}> {aboutData.designation}</span>
              </h1>
              <p>{aboutData.summary}</p>
            </main>
            <article>
              <h1>Quotes From My Idols</h1>
              <p className={styles.quote}>{quote.quote}</p>
              <span className={styles.author}>- {quote.author}</span>
              <button onClick={changeQuote}>Generate Another</button>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
