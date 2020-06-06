import React from "react"
import styles from "./button.module.scss"
import Jello from "react-reveal/Jello"

export default props => {
  return (
    <Jello>
      <div className={styles.link}>
        <a href="mailto:nwangumat@gmail.com">{props.data}</a>
      </div>
    </Jello>
  )
}
