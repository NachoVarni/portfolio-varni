import styles from "./Hero.module.scss";
import Navbar from "../Navbar";
import { useState, useEffect } from "react";
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
    <div className={styles.main} id="menu">
      <Navbar showMenu={showMenu} showOptions={showOptions} />
      <div className={styles.hero}>
        <div
          id="presentation"
          className={`${styles.presentation} ${
            showOptions ? styles.presentationHide : styles.presentationShow
          }`}
        >
          <h2>Hi there! I am Ignacio Varni, a frontend developer</h2>
        </div>

        <ul
          id="menu"
          className={`${styles.menu} ${
            showOptions ? styles.menuShow : styles.menuHide
          }`}
        >
          <li className={styles.option}>
            <Link activeClass="active" to="skills" spy={true} smooth={true}>
              Skills
            </Link>
          </li>

          <li className={styles.option}>
            <Link activeClass="active" to="work" spy={true} smooth={true}>
              Work
            </Link>
          </li>

          <li className={styles.option}>
            <Link activeClass="active" to="contact" spy={true} smooth={true}>
              Contact
            </Link>
          </li>
        </ul>
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
