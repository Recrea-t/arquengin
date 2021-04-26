import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  Box,
  SimpleGrid,
  Text,
  Image,
  Center,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react"

import {
  connectHits,
  connectStateResults,
  Index,
} from "react-instantsearch-dom"

const CustomHits = connectHits(({ hits }) => {
  const isSmallDevice = useBreakpointValue({ base: true, md: false })
  const loading = isSmallDevice ? "lazy" : "eager"

  return (
    <SimpleGrid columns={[1, null, 4]} spacing={8}>
      {hits.map(project => (
        <Box key={project.objectID}>
          <Link
            pos="relative"
            display="block"
            h={{ base: "auto", md: "full" }}
            _hover={{
              ".thumbnail-description": {
                visibility: "visible",
                opacity: 0.7,
              },
            }}
            as={GatsbyLink}
            to={`/projectes/${project.objectID}/`}
            title={project.title}
          >
            <Image
              border="6px solid"
              borderColor="revell.500"
              as={GatsbyImage}
              loading={loading}
              image={getImage(project.image)}
              alt={project.title}
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
          <Text display={{ base: "block", md: "none" }} w="full" fontSize="sm">
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
  )
})

const SearchResult = ({ indices }) => (
  <Index indexName={indices[0].name}>
    <CustomHits />
  </Index>
)

export default SearchResult
