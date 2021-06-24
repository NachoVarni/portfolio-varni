import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div id="contact" className={styles.main}>
      <h2 className={styles.contact}>contact</h2>
      <div className={styles.wrapper}>
        <span className={styles.contactData}>
          <FontAwesomeIcon icon={faEnvelopeOpenText} />
          nachovarni6@gmail.com
        </span>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          <a href="https://github.com/NachoVarni">
            https://github.com/NachoVarni
          </a>
        </span>

        <a href="https://www.linkedin.com/in/ignacio-varni-337970203/">
          <FontAwesomeIcon icon={faLinkedin} />
          https://www.linkedin.com/in/ignacio-varni
        </a>
      </div>
      <h2 className={styles.contact}>/ contact</h2>
    </div>
  );
}

export default Contact;
