import React from "react"
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout"
import Skills from "../components/skills"
import Header from "../components/header"
import About from "../components/about"
import Works from "../components/works"
import Footer from "../components/footer"
import Nav from "../components/nav"
import Blog from "../components/blog"
import Contact from "../components/contact"
import "../styles/index.scss"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import favicon16 from '../data/favicon-16x16.png'
import favicon32 from '../data/favicon-32x32.png'
import favicon from '../data/favicon.ico'
import {
  fab,
  faTwitter,
  faLinkedin,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"
import {
  faCaretRight,
  faBriefcase,
  faAngleDown,
  faEnvelope,
  faBomb,
  faWalking,
  faAngleUp,
  faLink,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons"

library.add(
  fab,
  faAngleUp,
  faLink,
  faStickyNote,
  faBriefcase,
  faAngleDown,
  faCaretRight,
  faEnvelope,
  faBomb,
  faTwitter,
  faLinkedin,
  faGithub,
  faMedium,
  faWalking
)

config.autoAddCss = false

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)
  return (
    <div className="container">
      <Helmet
        title={`${data.site.siteMetadata.author} | ${data.site.siteMetadata.title}`}
        meta={[
          {
            name: "description",
            content: "Tochukwu Nwanguma - Frontend Developer"
          },
          {
            name: "keywords",
            content: "frontend, developer"
          }
        ]}
        link={[
          { rel: "icon", type: "image/png", sizes: "16x16", href: `${favicon16}` },
          { rel: "icon", type: "image/png", sizes: "32x32", href: `${favicon32}` },
          { rel: "icon", type: "image/x-icon", href: `${favicon}` }
        ]}
      />
      <Layout>
        <Nav />
        <Header />
        <main className="main">
          <About />
          <Skills />
          <Works />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </Layout>
    </div>
  )
}

export default IndexPage
