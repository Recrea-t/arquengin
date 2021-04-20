import React from "react"
import { Link as GatsbyLink } from "gatsby"

import {
  Box,
  SimpleGrid,
  Center,
  Heading,
  Link,
  Text,
  Tooltip,
  HStack,
  VStack,
} from "@chakra-ui/react"

import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"

const ServiceSection = props => {
  const { title, description, list, className } = props

  const linkButton = (link, index) => (
    <Link
      key={index}
      variant="button"
      colorScheme="white"
      p={0}
      px={1}
      ml={2}
      mb=".25rem !important"
      as={GatsbyLink}
      href={link.url}
      title={link.title}
      rel="noopener"
      isExternal
    >
      {link.title}
    </Link>
  )

  return (
    <>
      <Heading size="lg">{title}</Heading>
      <Box w="full" my={4}>
        <ReactMarkdown components={ChakraUIRenderer()} children={description} />
      </Box>
      <Center w="full">
        <SimpleGrid
          w={["full", null, 2 / 3]}
          columns={[1, null, 2]}
          autoRows="min-content"
          spacing={4}
          px={4}
          py={[2, null, 4]}
          bg="revell.500"
        >
          {list.map((item, index) => (
            <VStack
              key={index}
              w="full"
              spacing={1}
              alignItems="flex-start"
              gridRowEnd={item.links ? "span 2" : "auto"}
            >
              <Tooltip label={item} aria-label="a tooltip">
                <Text
                  px={2}
                  w="fit-content"
                  maxW="100%"
                  maxH="fit-content"
                  className={className}
                >
                  {item.title}
                </Text>
              </Tooltip>
              {item.links && (
                <HStack w="full" wrap="wrap" spacing={2}>
                  {item.links.map(linkButton)}
                </HStack>
              )}
            </VStack>
          ))}
        </SimpleGrid>
      </Center>
    </>
  )
}

export default ServiceSection
