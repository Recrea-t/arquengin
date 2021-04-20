import React, { useEffect } from "react"
import { graphql } from "gatsby"
import slugify from "react-slugify"

import {
  Box,
  Flex,
  Image,
  Container,
  Heading,
  Icon,
  Link,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MotionFlex, motionRevealConfig } from "../theme/utils"

import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"

import Layout from "../components/Layout"

const AboutPage = props => {
  const { frontmatter } = props.data.markdownRemark
  const { image, people } = frontmatter

  const isSmallDevice = useBreakpointValue({ base: true, md: false })
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const linkButton = title => (
    <Link
      h="38px"
      w="38px"
      py="1px"
      px="4px"
      display="block"
      variant="button"
      colorScheme="white"
      href={`#${slugify(title)}`}
      title={title}
    >
      <Icon as={AddIcon} h="18px" w="17px" />
    </Link>
  )
  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <Container variant="with-top-padding">
        <Heading as="h2" className="with-sized-border">
          Qui som
        </Heading>

        <Flex mt={8} mb={4} direction={["column", null, "row"]}>
          <MotionFlex
            ref={ref}
            order={[1, null, 0]}
            direction={["row", null, "column"]}
            bg="revell.500"
            w={{ base: "full", md: 1 / 3, lg: 1 / 4 }}
            h={{
              base: "auto",
              md: image.childImageSharp.gatsbyImageData.height,
            }}
            p={8}
            mr={[0, null, 8]}
            mb={[4, null, 0]}
            {...motionRevealConfig(controls, "right")}
          >
            {people.map((person, index) => (
              <>
                <Box
                  key={index}
                  fontSize={["sm", null, "md"]}
                  textAlign={{
                    base: isSmallDevice && index === 1 ? "right" : "left",
                    md: "left",
                  }}
                >
                  <Heading as="h3" size="md">
                    {person.title}
                  </Heading>
                  <Box my={4}>
                    <ReactMarkdown
                      components={ChakraUIRenderer()}
                      children={person.summary}
                    />
                  </Box>
                  {person.description && (
                    <Flex
                      w="full"
                      direction="row"
                      justify={{
                        base:
                          isSmallDevice && index === 0
                            ? "flex-start"
                            : "flex-end",
                        md: "flex-start",
                      }}
                    >
                      {linkButton(person.title)}
                    </Flex>
                  )}
                </Box>
                {index === 0 && <Spacer />}
              </>
            ))}
          </MotionFlex>

          <Image
            order={[0, null, 1]}
            w={{ base: "full", md: 2 / 3, lg: 3 / 4 }}
            mb={[4, null, 0]}
            as={GatsbyImage}
            loading="eager"
            image={getImage(image)}
            alt="Qui som?"
          />
        </Flex>

        {people.map((person, index) => {
          if (!person.description) return null

          return (
            <Box
              key={index}
              w="full"
              lineHeight="24px"
              id={slugify(person.title)}
              style={{
                "scroll-margin-top": isSmallDevice ? "64px" : "96px",
              }}
            >
              <Heading as="h3">{person.title}</Heading>
              <Box my={4} className="markdown-blockquote">
                <ReactMarkdown
                  components={ChakraUIRenderer()}
                  children={person.description}
                />
              </Box>
            </Box>
          )
        })}
      </Container>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query AboutPageTemplateQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(
              width: 815
              placeholder: BLURRED
              formats: [AVIF, WEBP, AUTO]
            )
          }
        }
        people {
          title
          summary
          description
        }
      }
    }
  }
`
