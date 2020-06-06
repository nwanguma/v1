import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./header.module.scss"

const Header = props => {
  let [pageProgress, setPageProgress] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setPageProgress(true)
      } else {
        setPageProgress(false)
      }
    })
  })
  return (
    <header className={styles.header} id="#header">
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>
          <span className={styles.heading__primary}>Hello I'm Tochi.</span>
          <span className={styles.heading__secondary}>
            Frontend Developer & Jollof Warrior.
          </span>
        </h1>
        <p className={styles.summary}>
          Talented Frontend Developer with an eye for detail
          and a passion for creating elegant, intuitive and engaging
          user-facing applications.
        </p>
      </div>
      <a
        className={styles.btn_down}
        href="#about"
        role="navigation"
        onClick={e => {
          e.preventDefault()
          window.scrollTo(0, 657)
        }}
      >
        <FontAwesomeIcon
          icon="angle-down"
          size="2x"
          color="rgb(20, 109, 169)"
          className={styles.icon}
        />
      </a>
      <a
        className={
          pageProgress
            ? `${styles.btn_up} ${styles.enableBtnUp}`
            : styles.btn_up
        }
        href="/"
        role="navigation"
        onClick={e => {
          e.preventDefault()
          window.scrollTo(0, 0)
        }}
      >
        <FontAwesomeIcon
          icon="angle-up"
          size="2x"
          color="rgb(20, 109, 169)"
          className={styles.icon}
        />
        <span>Top</span>
      </a>
    </header>
  )
}

export default Header
