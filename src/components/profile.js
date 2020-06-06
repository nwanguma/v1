import React from "react"
import styles from "./profile.module.scss"

export default props => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {/* I am a 26 year old Frontend Web Developer based in Lagos, Nigeria. I
        have a background in the sciences having earned a bachelors degree in
        Microbiology in 2015. I joined a mid-tier FMCG firm a month after
        mandatory youth service and spent two years from Jan 2017 to Jan 2019
        as the principal logistics officer essentially coordinating all
        transfers of inventory nationwide.
        I left my position at
        the firm to pursue a career in tech which is something I have always wanted to do.<br></br>
        <br></br> My quest to learn web development the right way has exposed me to
        some of the best resources and tutors available on the web. I talk in
        detail about my motivations and journey{" "} */}
        I switched careers in 2019 from my former position as the principal logistics officer at
        a mid-tier FMCG firm to tech. <br></br>A couple months into my first official frontend role and 
        I couldn't be more pleased with how everything's worked out so far. <br></br>
        I recently completed my first major project - a fully featured agent web application with React.
        I talk in great detail about switching
        careers <a
          href="blog"
          onClick={e => {
            e.preventDefault()
            window.scrollTo(0, 4550)
          }}
        >
          <em>here.</em>
        </a>
        <br></br> 
        <br></br> 
        
        I spent at least two years after watching the original spiderman looking for 
        radioactive spiders to give me superpowers, now I crawl the web and create great web pages - miracles happen!.
        I love to build things, I love to learn, starting and completing projects is one hell of a high.
      </p>
    </div>
  )
}
