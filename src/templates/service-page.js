import React, { useEffect } from "react"
import { graphql, Link as GatsbyLink } from "gatsby"

import {
  Box,
  Container,
  Center,
  Heading,
  Icon,
  Link,
  Text,
  Flex,
  Spacer,
  Tooltip,
} from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"

import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MotionSimpleGrid, motionRevealConfig } from "../theme/utils"

import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"

import Layout from "../components/Layout"
import ServiceSection from "../components/ui/ServiceSection"

const ServicePage = props => {
  const { frontmatter } = props.data.markdownRemark

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const projectsButton = (
    <Link
      variant="button"
      colorScheme="revell"
      mr={[4, null, 0]}
      mb={[0, null, 4]}
      w={["auto", null, "full"]}
      textAlign="center"
      as={GatsbyLink}
      to="/projectes/"
      title="Els nostres projectes"
    >
      projectes
    </Link>
  )
  const contactButton = (
    <Link
      variant="button"
      colorScheme="revell"
      display="block"
      w="fit-content"
      as={GatsbyLink}
      to="/contacte/"
      title="Contacta amb nosaltres"
    >
      <Icon as={AddIcon} h={4} w={4} mb="2px" /> informació
    </Link>
  )
  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <Container variant="with-top-padding">
        <Heading
          as="h2"
          className={`with-sized-border ${frontmatter.className}`}
        >
          {frontmatter.heading}
        </Heading>

        <Box px={4}>
          <Box w="full" my={8}>
            <ReactMarkdown
              components={ChakraUIRenderer()}
              children={frontmatter.text}
            />
          </Box>

          <Center w="full">
            <MotionSimpleGrid
              ref={ref}
              w={["full", null, 2 / 3]}
              columns={[1, null, 2]}
              spacing={4}
              px={4}
              py={[2, null, 4]}
              bg="revell.500"
              {...motionRevealConfig(controls, "right")}
            >
              {frontmatter.list.map((item, index) => (
                <Tooltip label={item} aria-label="a tooltip">
                  <Text
                    key={index}
                    px={2}
                    w="fit-content"
                    maxW="100%"
                    className={frontmatter.className}
                  >
                    {item}
                  </Text>
                </Tooltip>
              ))}
            </MotionSimpleGrid>
          </Center>

          {frontmatter.sections &&
            frontmatter.sections.map((section, index) => (
              <Box key={index} mt={8}>
                <ServiceSection
                  className={frontmatter.className}
                  {...section}
                />
              </Box>
            ))}

          <Flex
            direction={["row", null, "column"]}
            w={["full", null, "max-content"]}
            justify={{ base: "flex-end", md: "flex-start" }}
            mt={8}
          >
            {frontmatter.className !== "is-enginyeria" && projectsButton}
            {frontmatter.className !== "is-enginyeria" && <Spacer />}
            {contactButton}
          </Flex>
        </Box>
      </Container>
    </Layout>
  )
}

export default ServicePage

export const query = graphql`
  query ServicePageTemplateQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        className
        heading
        text
        list
        sections {
          title
          description
          list {
            title
            links {
              title
              url
            }
          }
        }
      }
    }
  }
`
