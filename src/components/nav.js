import React, { useState, useEffect } from "react"
import styles from "./nav.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default props => {
  let [pageProgress, setPageProgress] = useState("Home")

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 657 && window.pageYOffset <= 1300) {
        setPageProgress("About")
      } else if (window.pageYOffset >= 1301 && window.pageYOffset <= 1950) {
        setPageProgress("Skills")
      } else if (window.pageYOffset >= 1951 && window.pageYOffset <= 4110) {
        setPageProgress("Works")
      } else if (window.pageYOffset >= 4111 && window.pageYOffset <= 5000) {
        setPageProgress("Blog")
      } else if (window.pageYOffset >= 5001 && window.pageYOffset <= 5700) {
        setPageProgress("Contact")
      } else {
        setPageProgress("Home")
      }
    })
  })

  return (
    <div className={styles.navigation}>
      <input
        type="checkbox"
        className={styles.navigation__checkbox}
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className={styles.navigation__button}>
        <span className={styles.navigation__icon}></span>
      </label>
      <div className={styles.navigation__background}>&nbsp;</div>
      <nav className={styles.navigation__nav} role="navigation">
        <ul className={styles.navigation__nav__list}>
          <li
            className={
              pageProgress === "About"
                ? `${styles.listItem} ${styles.active}`
                : styles.listItem
            }
          >
            <a
              href="#about"
              onClick={e => {
                e.preventDefault()
                window.scrollTo(0, 657)
              }}
            >
              <FontAwesomeIcon icon="walking" color="#146da9" size="xs" />
              <span>About</span>
            </a>
          </li>
          <li
            className={
              pageProgress === "Skills"
                ? `${styles.listItem} ${styles.active}`
                : styles.listItem
            }
          >
            <a
              href="#skills"
              onClick={e => {
                e.preventDefault()
                window.scrollTo(0, 1301)
              }}
            >
              <FontAwesomeIcon icon="bomb" color="#146da9" size="xs" />
              <span>Skills</span>
            </a>
          </li>
          <li
            className={
              pageProgress === "Works"
                ? `${styles.listItem} ${styles.active}`
                : styles.listItem
            }
          >
            <a
              href="#works"
              onClick={e => {
                e.preventDefault()
                window.scrollTo(0, 1951)
              }}
            >
              <FontAwesomeIcon icon="briefcase" color="#146da9" size="xs" />
              <span>Works</span>
            </a>
          </li>
          <li
            className={
              pageProgress === "Blog"
                ? `${styles.listItem} ${styles.active}`
                : styles.listItem
            }
          >
            <a
              href="#blog"
              onClick={e => {
                e.preventDefault()
                window.scrollTo(0, 4111)
              }}
            >
              <FontAwesomeIcon icon="sticky-note" color="#146da9" size="xs" />
              <span>Blog</span>
            </a>
          </li>
          <li
            className={
              pageProgress === "Contact"
                ? `${styles.listItem} ${styles.active}`
                : styles.listItem
            }
          >
            <a
              href="#contact"
              onClick={e => {
                e.preventDefault()
                window.scrollTo(0, 5190)
              }}
            >
              <FontAwesomeIcon icon="envelope" color="#146da9" size="xs" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
