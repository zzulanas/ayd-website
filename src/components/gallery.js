import * as React from "react"
import { graphql } from "gatsby"
import { Section, Container, Heading, Text } from "./ui"

export default function Gallery(props) {
  return (
    <Section>
      <Container>
        <Heading>{props.heading}</Heading>
        <Text>{props.text}</Text>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageBannerContent on HomepageBanner {
    gallery
  }
`