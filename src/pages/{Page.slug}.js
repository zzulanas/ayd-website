import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading } from "../components/ui"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Page(props) {
  const { page } = props.data

  return (
    <Layout {...page}>
      <Box paddingY={5}>
        <Container width="narrow">
          <Heading as="h1">{page.title}</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: page.html,
            }}
          />
          <GatsbyImage image={getImage(page.image.gatsbyImageData)}/>
        </Container>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query PageContent($id: String!) {
    page(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        url
        gatsbyImageData
      }
      html
    }
  }
`
