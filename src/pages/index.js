import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const H1 = styled.h1`
  font-size: 5rem;
  color: yellow;
  transform: rotate(-20deg);
`

const IndexPage = ({ data }) => {
  const { site } = data
  const { siteMetadata } = site
  return (
    <Layout>
      <SEO />
      <H1>{siteMetadata.title}</H1>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`
