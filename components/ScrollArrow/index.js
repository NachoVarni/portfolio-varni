import styles from "./ScrollArrow.module.scss";
import { Link } from "react-scroll";

function ScrollArrow({ label, className, direct }) {
  console.log(className);

  return (
    <div className={styles.redirect}>
      <Link activeClass="active" to={direct} spy={true} smooth={true}>
        <span className={styles.option}>{label}</span>
      </Link>
    </div>
  );
}

export default ScrollArrow;
