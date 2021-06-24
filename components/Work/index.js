import styles from "./Work.module.scss";

function Work() {
  return (
    <div id="work" className={styles.main}>
      <h2 className={styles.work}>work</h2>
      <div className={styles.wrapper}>
        <div>Project 1</div>
        <div>Project 2</div>
        <div>Project 3</div>
      </div>
      <h2 className={styles.work}>/ work</h2>
    </div>
  );
}

export default Work;
