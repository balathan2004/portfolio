import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";

export interface ResumeProps {
  title: string;
  args: string[];
}

export interface projectProps {
  link: string;
  name: string;
  imgsrc: string;
  summary: string;
}

export interface SocialProps {
  link: string;
  name: "github" | "linkedin" | "mail";
}

const ResumeArticle: FC<ResumeProps> = ({ title, args }) => {
  return (
    <article>
      <h1>{title}</h1>
      <ul>
        {args.map((ele) => {
          return <li key={ele}>{ele}</li>;
        })}
      </ul>
    </article>
  );
};

const ProjectArticle: FC<{ data: projectProps }> = ({ data }) => {
  return (
    <article style={{display:"flex",flexDirection:"column"}}>
      <h1>{data.name}</h1>
      <a href={data.link}>
        <span>{data.name}</span>
        <img src={data.imgsrc}></img>
      </a>
      <p>{data.summary}</p>
    </article>
  );
};

const SocialArticle: FC<{ data: SocialProps }> = ({ data }) => {
  const icons = {
    github: faGithub,
    linkedin: faLinkedin,
    mail: faEnvelope,
    developer_api: faCode,
  };

  const currentIcon = icons[data.name];
  return (
    <>
      <article>
        <a href={data.link}>
          <FontAwesomeIcon className={styles.icon} icon={icons[data.name]} />
        </a>
      </article>
    </>
  );
};

export { ResumeArticle, ProjectArticle, SocialArticle };
