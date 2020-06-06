import React from "react"
import styles from "./hobbies.module.scss"

const Hobbies = props => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        I'm a fan of Arsenal FC, you could say I'm obsessed. I play tennis every chance I get and I watch a lot of sports too,
        tennis, F1 and football mainly. I used to read a lot, now not so much, I blog and I spend a great deal of my time 
        discovering the next indie sensation.
      </p>
    </div>
  )
}

export default Hobbies
