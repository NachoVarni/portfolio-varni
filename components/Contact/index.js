import styles from "./Contact.module.scss";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollArrow from "../ScrollArrow";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Ignacio Varni</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ignacio Varni's personal page" />
        <meta property="og:title" content="My personal page" />
      </Head>
      <div id="contact" className={styles.main} data-aos="slide-right">
        <h2 className={styles.contact}> contact </h2>
        <div className={styles.wrapper}>
          <div className={styles.contactWrapper}>
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
          <div className={styles.redirect}>
            <ScrollArrow label="skills" className="option" direct="skills" />
            <ScrollArrow label="work" className="option" direct="work" />
          </div>
        </div>
        <h2 className={styles.contact}> / contact </h2>
      </div>
    </>
  );
}

export default Contact;
