import React from "react"
import useSiteMetadata from "../siteMetadata"

import {
  Flex,
  Box,
  Container,
  Text,
  Link,
  Heading,
  VStack,
  Icon,
} from "@chakra-ui/react"

import ContactForm from "../ui/ContactForm"

import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt"
const Contact = () => {
  const { organization } = useSiteMetadata()

  return (
    <Box
      id="contacte"
      w="full"
      py={4}
      bg="mangoTango.500"
      color="white"
      style={{
        scrollMarginTop: "100px",
      }}
    >
      <Container>
        <Heading variant="in-index">Contacte</Heading>

        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          alignItems="start"
          alignItems={["center", "start", "start", "start"]}
        >
          <VStack
            spacing={4}
            mr={{ base: 0, md: "4rem" }}
            alignItems="flex-start"
          >
            <Box>
              <Text>
                Tens una idea, una necessitat, un dubte, una proposta?
              </Text>
              <Text>
                Escriu-nos o visita'ns a l'espai de coworking d'Esterri d'Àneu.
              </Text>
            </Box>
            <ContactForm />
          </VStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Contact
