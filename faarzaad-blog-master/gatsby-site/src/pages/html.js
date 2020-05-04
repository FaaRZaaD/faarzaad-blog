import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Nav from "../components/Nav"
import HtmlList from "../components/HtmlList"

export const listItems = [
  {
    tab: "معرفی",
    link: "/html-introduction/",
  },
  {
    tab: "سی اس اس",
    link: "",
  },
]

const IndexPage = () => (
  <Layout>
    <Nav />
    <SEO title="Home" />
    <HtmlList />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
