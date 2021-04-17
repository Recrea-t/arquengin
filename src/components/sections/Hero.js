import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  Box,
  Flex,
  Heading,
  Text,
  Container,
  Link,
  Image,
} from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"

const Hero = props => {
  const { frontmatter } = props.data.markdownRemark
  return (
    <Box
      pos="relative"
      w="full"
      h={{
        base: "calc(100vh - 64px)",
        lg: "calc(100vh - 96px)",
      }}
      overflow={{ base: "auto", lg: "hidden" }}
    >
      <Image
        pos="absolute"
        left={0}
        top={0}
        zIndex={-10}
        as={GatsbyImage}
        image={getImage(frontmatter.hero)}
        alt="Imatge capcelera"
        loading="eager"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <Box pos="absolute" bottom="calc(50% - 1.37rem)" w="full">
        <Container textAlign="center">
          <Heading variant="in-hero" as="h1" pr="1.3rem">
            <Text>Estudi</Text>
            <Flex
              direction={{ base: "column", lg: "row" }}
              justifyContent="space-between"
            >
              <Text>
                d'
                <span className="hero-with-sized-border is-arquitectura">
                  arquitectura
                </span>
              </Text>
              <Text>
                <span className="hero-with-sized-border is-enginyeria">
                  enginyeria
                </span>
              </Text>
              <Text>
                <span className="hero-with-sized-border is-interiorisme">
                  interiorisme
                </span>
              </Text>
            </Flex>
          </Heading>
        </Container>
      </Box>
      <Link
        pos="absolute"
        left="calc(50% - 4rem)"
        bottom={8}
        variant="button"
        colorScheme="white"
        as={GatsbyLink}
        to="/projectes/"
        title="Els nostres projectes"
      >
        Projectes
      </Link>
    </Box>
  )
}

export default Hero
