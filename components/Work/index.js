import styles from "./Work.module.scss";
import ScrollArrow from "../ScrollArrow";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Work() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div id="work" className={styles.main} data-aos="slide-right">
      {/* <ScrollArrow arrowDirec={faArrowUp} className="arrow-up" direct="menu" /> */}
      <h2 className={styles.work}> work </h2>
      <div className={styles.wrapper}>
        <div>Project 1</div>
        <div>Project 2</div>
        <div>Project 3</div>
      </div>

      <h2 className={styles.work}>/ work </h2>
      {/* <ScrollArrow arrowDirec={faArrowDown} className="arrow-down" /> */}
    </div>
  );
}

export default Work;
