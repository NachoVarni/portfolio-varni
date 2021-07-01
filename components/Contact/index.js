import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ScrollArrow from "../ScrollArrow";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "../Navbar";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div id="contact" className={styles.main} data-aos="slide-right">
        {/* <ScrollArrow arrowDirec={faArrowUp} className="arrow-up" direct="menu" /> */}
        <h2 className={styles.contact}> contact </h2>
        <div className={styles.wrapper}>
          <span className={styles.contactData}>
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              className={styles.logo}
            />
            nachovarni6@gmail.com
          </span>
          <span className={styles.contactData}>
            <FontAwesomeIcon icon={faGithub} className={styles.logo} />
            <a href="https://github.com/NachoVarni">
              https://github.com/NachoVarni
            </a>
          </span>

          <a
            className={styles.contactData}
            href="https://www.linkedin.com/in/ignacio-varni-337970203/"
          >
            <FontAwesomeIcon icon={faLinkedin} className={styles.logo} />
            https://www.linkedin.com/in/ignacio-varni
          </a>
        </div>
        <h2 className={styles.contact}> / contact </h2>
      </div>
    </>
  );
}

export default Contact;
