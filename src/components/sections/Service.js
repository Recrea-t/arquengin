import React, { useEffect } from "react"
import { Link as GatsbyLink } from "gatsby"

import {
  Box,
  Container,
  Center,
  Heading,
  Link,
  Text,
  Flex,
  Spacer,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react"

import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MotionSimpleGrid, motionRevealConfig } from "../../theme/utils"

import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"

import ServiceSection from "../ui/ServiceSection"

const Service = service => {
  const isSmallDevice = useBreakpointValue({ base: true, md: false })
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
      + informació
    </Link>
  )
  return (
    <Container
      key={service.id}
      id={service.id}
      style={{
        "scroll-margin-top": isSmallDevice ? "64px" : "96px",
      }}
      variant="with-top-padding"
    >
      <Heading as="h2" className={`with-sized-border ${service.className}`}>
        {service.title}
      </Heading>

      <Box px={4}>
        <Box w="full" my={8}>
          <ReactMarkdown
            components={ChakraUIRenderer()}
            children={service.description}
          />
        </Box>

        <Center w="full">
          <MotionSimpleGrid
            ref={ref}
            maxW="full"
            columns={[1, null, 2]}
            spacing={4}
            px={4}
            py={[2, null, 4]}
            bg="revell.500"
            {...motionRevealConfig(controls, "right")}
          >
            {service.list.map((item, index) => (
              <Tooltip label={item} aria-label="a tooltip">
                <Text
                  key={index}
                  px={2}
                  w="fit-content"
                  maxW="100%"
                  className={service.className}
                >
                  {item}
                </Text>
              </Tooltip>
            ))}
          </MotionSimpleGrid>
        </Center>

        {service.sections &&
          service.sections.map((section, index) => (
            <Box key={index} mt={8}>
              <ServiceSection className={service.className} {...section} />
            </Box>
          ))}

        <Flex
          direction={["row", null, "column"]}
          w={["full", null, "max-content"]}
          justify={{ base: "flex-end", md: "flex-start" }}
          mt={8}
        >
          {service.className !== "is-enginyeria" && projectsButton}
          {service.className !== "is-enginyeria" && <Spacer />}
          {contactButton}
        </Flex>
      </Box>
    </Container>
  )
}

export default Service
