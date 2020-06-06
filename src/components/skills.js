import React, { useState } from "react"
import styles from "./skills.module.scss"
import Heading from "./heading"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Swing from "react-reveal/Swing"

export default props => {
  //Could have created an array instead but hey it's react.
  const [skills] = useState([
    "CSS / SCSS",
    "JavaScript ES6",
    "Go",
    "React",
    "Vue",
    "Node JS",
    "Gatsby",
    "Jest",
    "Enzyme",
    "Firebase",
    "Express",
    "Redux"
  ])
  return (
    <Swing>
      <section className={styles.section} id="skills">
        <Heading
          icon="bomb"
          heading="Skills"
          rider="What can he do?"
          isCenter={true}
        />
        <div className={styles.content}>
          <div className={styles.content__introduction}>
            <p className={styles.content__introduction__text}>
              Below are some of the languages, frameworks or tools that I've
              worked with recently. I am willing to learn new technologies as
              required.
            </p>
            <div className={styles.content__list}>
              <ul>
                {skills.map((skill, index) => {
                  return (
                    <li key={index}>
                      <FontAwesomeIcon icon="caret-right" color="#146da9" />
                      <span>{skill}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Swing>
  )
}
