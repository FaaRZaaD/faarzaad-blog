import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Nav from "../components/Nav"
import List from "../components/List"

const IndexPage = () => (
  <Layout>
    <Nav />
    <SEO title="Home" />
    <List />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
