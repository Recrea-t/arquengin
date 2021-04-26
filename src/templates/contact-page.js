import React, { useEffect } from "react"
import { graphql } from "gatsby"
import useSiteMetadata from "../components/siteMetadata"

import {
  Box,
  Flex,
  Container,
  Heading,
  Text,
  Link,
  Spacer,
  useBreakpointValue,
  AspectRatio,
} from "@chakra-ui/react"

import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MotionVStack, motionRevealConfig } from "../theme/utils"

import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"

import Layout from "../components/Layout"

import ContactForm from "../components/ui/ContactForm"

const ContactPage = props => {
  const { frontmatter } = props.data.markdownRemark
  const { organization } = useSiteMetadata()

  const isSmallDevice = useBreakpointValue({ base: true, md: false })
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const gMap = (
    <AspectRatio
      w="full"
      order={[1, null, 0]}
      mb={[4, null, 0]}
      ratio={{ base: 4 / 3, md: 3.29 }}
    >
      <iframe
        title="Google Map · Arquengin"
        alt="Google Map · Arquengin"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GATSBY_GOOGLE_API_KEY}&language=ca&q=arquengin`}
        aria-hidden="false"
        allowFullScreen
      />
    </AspectRatio>
  )
  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <Container variant="with-top-padding">
        <Heading as="h2" className="with-sized-border">
          Contacte
        </Heading>

        <Flex mt={8} mb={4} direction={["column", null, "row"]}>
          <MotionVStack
            ref={ref}
            order={[1, null, 0]}
            bg="revell.500"
            w={{ base: "full", md: 1 / 3, lg: 1 / 4 }}
            p={8}
            mr={[0, null, 8]}
            mb={[4, null, 0]}
            spacing={8}
            {...motionRevealConfig(controls, "right")}
          >
            <Box
              w="full"
              textAlign={{
                base: "center",
                md: "left",
              }}
            >
              <Text
                dangerouslySetInnerHTML={{ __html: organization.address }}
              />
              <Text>
                OFICINA:{" "}
                <Link
                  href={`tel:${organization.phone.number}`}
                  title="Truca'ns a l'oficina"
                >
                  {organization.phone.title}
                </Link>
              </Text>
              <Text>
                ALBA:{" "}
                <Link href={`tel:34609548991`} title="Truca l'Alba">
                  609 548 991
                </Link>
              </Text>
              <Text>
                JORDI:{" "}
                <Link href={`tel:34630974786`} title="Truca el Jordi">
                  630 974 786
                </Link>
              </Text>
            </Box>
            <Box
              w="full"
              textAlign={{
                base: "center",
                md: "left",
              }}
            >
              <ReactMarkdown
                components={ChakraUIRenderer()}
                children={frontmatter.text}
              />
            </Box>
          </MotionVStack>
          {isSmallDevice ? (
            <>
              {gMap}
              <Box w="full" mb={4} order={2}>
                <ContactForm />
              </Box>
            </>
          ) : (
            <Box w={{ base: "full", md: 2 / 3, lg: 3 / 4 }}>
              {gMap}
              <ContactForm />
            </Box>
          )}
        </Flex>
      </Container>
    </Layout>
  )
}

export default ContactPage

export const query = graphql`
  query ContactPageTemplateQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        text
      }
    }
  }
`
