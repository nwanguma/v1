import React from "react"
import Tabs from "./tabs"
import styles from "./about.module.scss"
import Heading from "./heading"
import avatar from "../data/avatar.jpg"
import Zoom from "react-reveal/Zoom"

export default props => {
  return (
    <Zoom>
      <section id="about" className={styles.section}>
        <Heading icon="walking" heading="About" rider="Who is Tochi?" />
        <div className={styles.content}>
          <div className={styles.content__tabs}>
            <Tabs />
          </div>
          <div className={styles.content__imageContainer}>
            <img
              onDragStart={e => {
                e.preventDefault()
              }}
              src={avatar}
              alt="Developer's avatar"
              className={styles.image}
            />
          </div>
        </div>
      </section>
    </Zoom>
  )
}
