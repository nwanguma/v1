import React, { useState } from "react"
import Profile from "./profile"
import Interests from "./interests"
import Hobbies from "./hobbies"
import styles from "./tabs.module.scss"

export default () => {
  const [isActive, setIsActive] = useState("Profile")

  function handleOnClickProfile() {
    setIsActive("Profile")
  }

  function handleOnClickInterests() {
    setIsActive("Interests")
  }

  function handleOnClickHobbies() {
    setIsActive("Hobbies")
  }

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.headContainer}>
        <button
          className={
            isActive === "Profile"
              ? `${styles.currentTab} ${styles.head__button}`
              : `${styles.head__button}`
          }
          onClick={handleOnClickProfile}
        >
          Profile
        </button>
        <button
          className={
            isActive === "Interests"
              ? `${styles.currentTab} ${styles.head__button}`
              : `${styles.head__button}`
          }
          onClick={handleOnClickInterests}
        >
          Interests
        </button>
        <button
          className={
            isActive === "Hobbies"
              ? `${styles.currentTab} ${styles.head__button}`
              : `${styles.head__button}`
          }
          onClick={handleOnClickHobbies}
        >
          Hobbies
        </button>
      </div>
      <div className={styles.contentContainer}>
        {isActive === "Profile" ? (
          <Profile />
        ) : isActive === "Interests" ? (
          <Interests />
        ) : isActive === "Hobbies" ? (
          <Hobbies />
        ) : (
                <Profile />
              )}
      </div>
    </div>
  )
}
