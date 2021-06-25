import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ScrollArrow.module.scss";
import { Link } from "react-scroll";

function ScrollArrow({ arrowDirec, className, direct }) {
  return (
    <Link activeClass="active" to={direct} spy={true} smooth={true}>
      <FontAwesomeIcon icon={arrowDirec} className={styles[className]} />
    </Link>
  );
}

export default ScrollArrow;
