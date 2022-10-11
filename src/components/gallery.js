import * as React from "react"
import { graphql } from "gatsby"
import { Section, Container, Text } from "./ui"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Gallery({data}) {

  return (
    <Section>
    <Text>TEST</Text>
      <Container>
        {data.images.map((image) => (
          <GatsbyImage
            image={getImage(image.gatsbyImageData)}
          />
          ))}
      </Container>
    </Section>
  )
}

export const query = graphql`
  {
    gallery{
      images {
        id
        gatsbyImageData
      }
    }
  }
`