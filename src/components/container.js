import React from "react"
import styles from "./container.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Zoom from "react-reveal/Zoom"

export default props => {
  return (
    <Zoom>
      <div
        className={
          props.blog
            ? `${styles.container} ${styles.blogContainer}`
            : styles.container
        }
      >
        {props.image ? (
          <figure className={styles.container__structure}>
            <img
              src={props.image}
              alt={props.alt}
              className={styles.container__img}
            />
            <figcaption className={styles.container__caption}>
              {props.title}
            </figcaption>
          </figure>
        ) : (
            undefined
          )}
        <div className={styles.container__text}>
          <h3 className={styles.headingTertiary}>{props.title}</h3>
          <p>
            {props.description}
            <br></br>
            <br></br>
            {props.tags}
            {!props.blog ? (
              <span className={styles.icons}>
                <a
                  href={props.githubLink}
                  className={styles.icons__link}
                  target="blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    className={styles.icons__icon}
                    size="lg"
                  />
                </a>
                {props.demoLink ? (
                  <a
                    href={props.demoLink}
                    className={styles.icons__link}
                    target="blank"
                    rel="noreferrer noopener"
                  >
                    <FontAwesomeIcon
                      icon="link"
                      className={styles.icons__icon}
                      size="lg"
                    />
                  </a>
                ) : (
                    props.demoLink
                  )}
              </span>
            ) : (
                <a
                  href={props.link}
                  className={styles.readMore}
                  target="blank"
                  rel="noreferrer noopener"
                >
                  <span>Read more</span>
                </a>
              )}
          </p>
        </div>
      </div>
    </Zoom>
  )
}
