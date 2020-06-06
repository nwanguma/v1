import React from "react"
import styles from "./footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default props => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socials}>
          <a
            href="http://github.com/savetochi"
            target="blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              color="#999"
              size="lg"
              className={styles.icon}
            />
          </a>
          <a
            href="http://linkedin.com/in/tochukwu-nwanguma"
            target="blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              color="#999"
              size="lg"
              className={styles.icon}
            />
          </a>
          <a
            href="http://medium.com/@tochukwunwanguma"
            target="blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "medium"]}
              color="#999"
              size="lg"
              className={styles.icon}
            />
          </a>
          <a
            href="http://twitter.com/thattochi"
            target="blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              color="#999"
              size="lg"
              className={styles.icon}
            />
          </a>
        </div>
        <p className={styles.text}>+2348157827385</p>
        <p className={styles.text}>nwangumat@gmail.com</p>
      </div>
    </footer>
  )
}
