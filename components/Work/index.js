import styles from "./Work.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import toyotaPic from "../../public/assets/toyota-screenshot.png";
import spotifyLogo from "../../public/assets/spotify-logo.png";
import nodeLogo from "../../public/assets/node-logo.png";

function Work() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="work" className={styles.main} data-aos="slide-right">
      {/* <ScrollArrow arrowDirec={faArrowUp} className="arrow-up" direct="menu" /> */}
      <h2 className={styles.work}> work </h2>
      <div className={styles.wrapper}>
        <div className={`${styles.card} `}>
          <div className={styles.projectPic}>
            <Image src={spotifyLogo} alt="spotify" />
          </div>
          <div className={styles.desc}>
            <p>
              A Spotify App simulation interacting with theirs API. Framework:
              Next.js
            </p>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a href="https://github.com/NachoVarni/musikit-next">
                  Github: https://github.com/NachoVarni/musikit-next
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`${styles.card} `}>
          <div className={styles.projectPic}>
            <Image src={toyotaPic} alt="toyota" />
          </div>
          <div className={styles.desc}>
            <p>A Toyota Page simulation. Framework: Next.js</p>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a href="https://github.com/NachoVarni/toyota">
                  Github: https://github.com/NachoVarni/toyota
                </a>
              </li>
              <li className={styles.item}>
                <a href="https://toyotaexample.vercel.app">
                  Website: https://toyotaexample.vercel.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`${styles.card} `}>
          <div className={styles.projectPic}>
            <Image src={nodeLogo} alt="node" />
          </div>
          <div className={styles.desc}>
            <p>
              A REST API. Includes session management and password hashing.
              Framework: Node.js
            </p>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a href="https://github.com/NachoVarni/Courflix-backend">
                  Github: https://github.com/NachoVarni/Courflix-backend
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className={styles.work}>/ work </h2>
      {/* <ScrollArrow arrowDirec={faArrowDown} className="arrow-down" /> */}
    </div>
  );
}

export default Work;
