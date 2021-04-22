import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { Container, Heading, Box } from "@chakra-ui/react"

import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"

import Layout from "../components/Layout"
import Search from "../components/sections/Search"

const searchIndices = [
  {
    name: `projectes`,
    title: `Projectes`,
  },
]

const ProjectsListPage = props => {
  const { frontmatter } = props.data.markdownRemark

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <Container variant="with-top-padding">
        <Heading as="h2" className="with-sized-border">
          Projectes
        </Heading>
        <Box my={8} w="full">
          <ReactMarkdown
            components={ChakraUIRenderer()}
            children={frontmatter.text}
          />
        </Box>

        <Search indices={searchIndices} />
      </Container>
    </Layout>
  )
}

ProjectsListPage.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.object,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProjectsListPage

export const query = graphql`
  query ProjectsListPageTemplateQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        text
      }
    }
  }
`
