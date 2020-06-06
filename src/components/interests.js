import React from "react"
import styles from "./interests.module.scss"

export default props => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        I'd wager that a version of me exists in some alternate reality where
        I'm a mediocre designer. I'm really curious about why most things are
        built the way they are and how they could be improved functionally if
        not aesthetically. I hope to immerse myself in the world of design soon.
        I like art - my favourite work of art is{" "}
        <em>Piet Mondrian's composition in red blue and yellow</em>, I can
        doodle a bit, signing up for art class when I find time (soon hopefully).
        <br></br>
        I'd love to make music at some point in the future.
      </p>
    </div>
  )
}
