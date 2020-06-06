import React from "react"
import Button from "./button"
import Heading from "./heading"
import styles from "./contact.module.scss"
import Tada from "react-reveal/Tada"

export default props => {
  return (
    <Tada>
      <section className={styles.section} id="contact">
        <Heading icon="envelope" heading="Contact" rider="Wow brilliant stuff! what is he up to and how can we find him?" />
        <p className={styles.content}>
          I'm available to take on exciting new projects.
        </p>
        <div className={styles.mail}>
          <Button data="Say Hello!" />
        </div>
      </section>
    </Tada>
  )
}
