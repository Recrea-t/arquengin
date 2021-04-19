import React from "react"
import slugify from "react-slugify"
import { graphql, Link as GatsbyLink } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import {
  Container,
  Heading,
  SimpleGrid,
  Image,
  useBreakpointValue,
  Box,
  Center,
  Link,
  Text,
} from "@chakra-ui/react"

import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"

import Layout from "../components/Layout"

const ProjectsListPage = props => {
  const { frontmatter } = props.data.markdownRemark

  const isSmallDevice = useBreakpointValue({ base: true, md: false })
  const loading = isSmallDevice ? "lazy" : "eager"

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
        <SimpleGrid columns={[1, null, 4]} spacing={8}>
          {frontmatter.projectes.map((project, index) => (
            <Box>
              <Link
                key={index}
                pos="relative"
                display="block"
                h={{ base: "auto", md: "full" }}
                ml={{ base: 4, md: 0 }}
                _hover={{
                  ".thumbnail-description": {
                    visibility: "visible",
                    opacity: 0.7,
                  },
                }}
                as={GatsbyLink}
                to={`/projectes/${slugify(project.title)}/`}
                title={project.title}
              >
                <Image
                  border="6px solid"
                  borderColor="revell.500"
                  as={GatsbyImage}
                  loading={loading}
                  image={getImage(project.images[0].thumbnail)}
                  alt={project.images[0].alt}
                />
                <Center
                  display={{ base: "none", md: "flex" }}
                  className="thumbnail-description"
                  pos="absolute"
                  top="6px"
                  bottom="6px"
                  left="6px"
                  right="6px"
                  bg="revell.500"
                  visibility="hidden"
                  opacity={0}
                  transition="opacity .2s, visibility .2s"
                >
                  <Text w="full" textAlign="center" fontSize="sm" noOfLines={2}>
                    <span
                      style={{
                        fontFamily: "'DM Serif Text'",
                        textTransform: "uppercase",
                      }}
                    >
                      {project.category}
                    </span>
                    <br />
                    {project.title}
                  </Text>
                </Center>
              </Link>
              <Text
                display={{ base: "block", md: "none" }}
                w="full"
                fontSize="sm"
              >
                <span
                  style={{
                    fontFamily: "'DM Serif Text'",
                    textTransform: "uppercase",
                  }}
                >
                  {project.category}
                </span>
                <br />
                {project.title}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
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
        projectes {
          title
          category
          images {
            alt
            thumbnail: src {
              childImageSharp {
                gatsbyImageData(
                  width: 340
                  aspectRatio: 1
                  transformOptions: { cropFocus: CENTER }
                  placeholder: BLURRED
                  formats: [AVIF, WEBP, AUTO]
                )
              }
            }
          }
        }
      }
    }
  }
`
