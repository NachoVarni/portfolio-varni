import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function Navbar({ showMenu, showOptions }) {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <span className={styles.option}>Logo</span>
      </div>
      <div className={styles.right}>
        <Link activeClass="active" to="skills" spy={true} smooth={true}>
          <FontAwesomeIcon icon={faArrowDown} />
        </Link>
        {!showOptions && (
          <span
            className={`${styles.option} ${styles.hamburguerShow}`}
            onClick={showMenu}
          >
            <FontAwesomeIcon icon={faBars} className={styles.hamFont} />
          </span>
        )}

        {showOptions && (
          <p
            onClick={showMenu}
            className={`${styles.option} ${styles.arrowShow}`}
          >
            <FontAwesomeIcon icon={faArrowLeft} className={styles.arrowFont} />
          </p>
        )}
      </div>
    </div>
  );
}

export default Navbar;
