import styles from "./Skills.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollArrow from "../ScrollArrow";
import { Link } from "react-scroll";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.main} id="skills" data-aos="slide-right">
      <h2 className={`${styles.skills} ${styles.up}`}>skills</h2>
      <div className={styles.content}>
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
        <div className={styles.redirect}>
          <ScrollArrow label="work" direct="work" />
          <ScrollArrow label="contact" direct="contact" />
        </div>
      </div>
      <h2 className={`${styles.skills} ${styles.down}`}>/ skills</h2>
    </div>
  );
}

export default Skills;
