import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../layout"
import Nav from "../Nav"
import { Titr, Container, PostContent } from "./styles"

function PostContainer(props) {
  const { markdownRemark } = props.data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Layout>
        <Nav />
        <Container>
          <div className="blog-post">
            <Titr>{frontmatter.title}</Titr>
            <PostContent>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </PostContent>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
      }
    }
  }
`

export default PostContainer
