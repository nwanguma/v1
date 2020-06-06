import React from "react"
import styles from "./heading.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default props => {
  return (
    <>
      <h2 className={styles.heading}>
        <FontAwesomeIcon icon={props.icon} color="#146da9" />
        <span>{props.heading}</span>
      </h2>
      <h3 className={styles.rider}>
        <span className={styles.rider__text}>{props.rider}</span>
      </h3>
    </>
  )
}
