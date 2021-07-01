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
        <span className={styles.option}></span>
      </div>
      <div className={styles.right}>
        {!showOptions && (
          <span
            className={`${styles.option} ${styles.hamburguerShow}`}
            onClick={showMenu}
          >
            <FontAwesomeIcon icon={faBars} className={styles.hamFont} />
          </span>
        )}

        {showOptions && (
          <Link activeClass="active" to="menu" spy={true} smooth={true}>
            <span
              onClick={showMenu}
              className={`${styles.option} ${styles.arrowShow}`}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className={styles.arrowFont}
              />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
