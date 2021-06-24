import styles from "./Skills.module.scss";

function Skills() {
  return (
    <div className={styles.main} id="skills">
      <h2 className={styles.skills}>skills</h2>
      <ul className={styles.list}>
        <li>Next.js</li>
        <li>React.js</li>
        <li>Javascript</li>
        <li>Html</li>
        <li>Css, sass, css animations</li>
        <li>Redux</li>
        <li>Node.js, express.js, MongoDB</li>
        <li>Passport, multer, bcrypt</li>
      </ul>
      <h2 className={styles.skills}>/ skills</h2>
    </div>
  );
}

export default Skills;
