import React from "react"
import styles from "./blog.module.scss"
import Heading from "./heading"
import Container from "./container"
import Zoom from "react-reveal/Zoom"

export default props => {
  //Doing this manually becasue this plugin until the medium plugin is fixed.

  // const medium = useStaticQuery(graphql`
  //   query {
  //     allMediumPost(sort: { fields: [createdAt], order: DESC }) {
  //       edges {
  //       node {
  //       id
  //       title
  //       virtuals {
  //         subtitle
  //         previewImage {
  //               imageId
  //             }
  //           }
  //       author {
  //       name
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <section className={styles.section} id="blog">
      <Zoom>
        <Heading icon="sticky-note" heading="Blog" rider="Tell us more" />
      </Zoom>
      <div className={styles.content}>
        <Container
          title="First Technical Interview"
          description="So, I put off applying for junior roles to focus on learning and just being a decent dev 
        until sometime in July when I saw an ad for a senior dev role at one of 
        Nigeria's hottest emerging startups."
          tags="Tags: JavaScript, Web Development, Journey, Life, Tech"
          blog="blog"
          link="https://medium.com/@tochukwunwanguma/first-technical-interview-5c1e4396b8ab"
        />
        <Container
          title="Half stack Developer"
          description="Between my last post in late March and now, I’ve learned React, Redux, SASS, 
          the basics of version control with git, setting up webpack, babel and a bunch of additional 
          stuff that’s apparently..."
          tags="Tags: JavaScript, Web Development, Journey, Life, Tech"
          blog="blog"
          link="https://medium.com/@tochukwunwanguma/no-stack-web-developer-28513dd6cceb"
        />
        <Container
          title="No stack Developer"
          description="In December 2018, I resigned from my logistics 
        and supply chain management position at a mid-sized Nigerian FMCG firm 
        to pursue a career in web design/development."
          tags="Tags: Web Development, Journey"
          blog="blog"
          link="https://medium.com/@tochukwunwanguma/half-stack-developer-179a85873bf5"
        />
      </div>
    </section>
  )
}
