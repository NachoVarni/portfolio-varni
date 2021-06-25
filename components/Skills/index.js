import styles from "./Skills.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ScrollArrow from "../ScrollArrow";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className={styles.main} id="skills" data-aos="slide-right">
      <ScrollArrow arrowDirec={faArrowUp} direct="menu" className="arrow-up" />
      <h2 className={styles.skills}>skills</h2>
      <ul className={styles.list}>
        <li>Next.js</li>
        <li>React.js</li>
        <li>Javascript</li>
        <li>Html</li>
        <li>Css, sass, css animations</li>
        <li>Redux</li>
        <li>Node.js, express.js, MongoDB</li>
        <li>Passport, multer, bcrypt</li>
      </ul>
      <h2 className={styles.skills}>/ skills</h2>
      <ScrollArrow arrowDirec={faArrowDown} className="arrow-down" />
    </div>
  );
}

export default Skills;
