import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { Container, SimpleGrid } from "@chakra-ui/react"

import Layout from "../components/Layout"
import Hero from "../components/sections/Hero"
import ServiceCard from "../components/ui/ServiceCard"

const IndexPage = props => {
  const { frontmatter } = props.data.markdownRemark

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <Hero {...props} />
      <Container my={4}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: 4, md: 8 }}
        >
          <ServiceCard
            index={0}
            title="Arquitectura"
            items={frontmatter.arquitectura}
            className="is-arquitectura"
            to="/serveis/#arquitectura"
          />
          <ServiceCard
            index={1}
            title="Enginyeria"
            items={frontmatter.enginyeria}
            className="is-enginyeria"
            to="/serveis/#enginyeria"
          />
          <ServiceCard
            index={2}
            title="Interiorisme"
            items={frontmatter.interiorisme}
            className="is-interiorisme"
            to="/serveis/#interiorisme"
          />
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.object,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const query = graphql`
  query IndexPageTemplateQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        hero {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AVIF, WEBP, AUTO]
            )
          }
        }
        arquitectura
        enginyeria
        interiorisme
      }
    }
  }
`
