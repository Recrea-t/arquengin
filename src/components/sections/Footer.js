import React from "react"
import useSiteMetadata from "../siteMetadata"
import { Link as GatsbyLink } from "gatsby"
import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Link,
  StackDivider,
  Divider,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react"

import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt"

const Footer = props => {
  const { organization, author } = useSiteMetadata()
  const isNotSmallDevice = useBreakpointValue({ base: false, md: true })

  return (
    <Box as="footer" w="full" bg="greyishBrown.500" color="white">
      <VStack
        align="center"
        justify="center"
        spacing={4}
        w="full"
        maxWidth="1200px"
        mx="auto"
        px={4}
        py={{ base: 4, lg: 8 }}
        {...props}
      >
        <Flex
          w="full"
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          textAlign="center"
          mb={{ base: 0, lg: 4 }}
          px={{ base: 0, lg: 4 }}
        >
          <Box minW="310px">
            <Icon as={FaMapMarkerAlt} h={4} w={4} />
            <Text dangerouslySetInnerHTML={{ __html: organization.address }} />
          </Box>
          <Box minW="310px">
            <Icon as={FaPhoneAlt} h={4} w={4} />
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
          <Box minW="310px">
            <Icon as={FaEnvelope} h={4} w={4} />
            <Text>
              <Link href={`mailto:${organization.email}`} title="Escriu-nos">
                {organization.email}
              </Link>
            </Text>
          </Box>
        </Flex>

        <Divider
          borderBottomWidth="6px"
          borderBottomColor="white"
          opacity={1}
        />

        <Flex
          w="full"
          direction={["column", null, "row"]}
          textAlign="center"
          justify="space-around"
          fontWeight="light"
          mt={{ base: 0, lg: 4 }}
        >
          <Text display={["block", null, "none"]}>
            {props.title} {new Date().getFullYear()}
          </Text>

          <HStack spacing={2} divider={<StackDivider />} justify="center">
            {isNotSmallDevice && (
              <Text>
                {props.title} {new Date().getFullYear()}
              </Text>
            )}
            <Link to="/avis-legal/" title="Avís legal" as={GatsbyLink}>
              Avís legal
            </Link>
            <Link
              to="/politica-de-proteccio-de-dades/"
              title="Política de protecció de dades personals"
              as={GatsbyLink}
            >
              Política de protecció de dades
            </Link>
          </HStack>

          <Text>
            DISSENY:{" "}
            <Link
              href={author.url}
              title={author.description}
              isExternal
              target="_blank"
              rel="noopener"
            >
              {author.name}
            </Link>
          </Text>
        </Flex>
      </VStack>
    </Box>
  )
}

export default Footer
