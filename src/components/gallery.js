import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Section, Container, Text } from "./ui"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Gallery() {
  const data = useStaticQuery(graphql`
  query galleryQuery{
    contentfulGallery{
      images {
        id
        gatsbyImageData
      }
    }
  }
`)
console.log(data.contentfulGallery.images)
  return (
    <Section>
      <Container>
        {data.contentfulGallery.images.map((image) => (
          <GatsbyImage
            image={getImage(image.gatsbyImageData)}
            style={{margin : '10px'}}
          />
          ))}
      </Container>
    </Section>
  )
}

// export const galleryQuery = graphql`
//   query galleryQuery{
//     gallery{
//       images {
//         id
//         gatsbyImageData
//       }
//     }
//   }
// `