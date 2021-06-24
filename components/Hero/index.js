import styles from "./Hero.module.scss";
import Navbar from "../Navbar";
import { useState } from "react";
import Skills from "../Skills";
import Work from "../Work";
import Contact from "../Contact";
import { Link } from "react-scroll";

function Hero() {
  const [showOptions, setShowOptions] = useState(false);

  function showMenu() {
    console.log("probando");
    setShowOptions((prevState) => !prevState);
    console.log(showOptions);
  }

  return (
    <div className={styles.main}>
      <Navbar showMenu={showMenu} showOptions={showOptions} />
      <div className={styles.hero}>
        <div
          className={`${styles.presentation} ${
            showOptions ? styles.presentationHide : styles.presentationShow
          }`}
        >
          <h2>Hi there! I am Ignacio Varni, a frontend developer</h2>
        </div>

        {showOptions && (
          <ul
            className={`${styles.menu} ${
              showOptions ? styles.menuShow : styles.menuHide
            }`}
          >
            <Link activeClass="active" to="skills" spy={true} smooth={true}>
              <li className={styles.option}>Skills</li>
            </Link>
            <li className={styles.option}>Work</li>
            <li className={styles.option}>Contact</li>
          </ul>
        )}
      </div>
      <div className={styles.info}>
        <Skills />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default Hero;
