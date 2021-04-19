import React, { useEffect } from "react"
import { Link as GatsbyLink } from "gatsby"

import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MotionVStack, motionRevealConfig } from "../../theme/utils"
import {
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  List,
  ListItem,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"

const ServiceCard = props => {
  const { title, items, to } = props
  let { className } = props

  const isSmallDevice = useBreakpointValue({ base: true, md: false })
  const index = isSmallDevice ? 0 : props.index

  if (isSmallDevice && props.index === 1) {
    className += " justify-end"
  }

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const linkButton = (
    <Link
      h="66px"
      w="66px"
      display="block"
      variant="button"
      colorScheme="white"
      as={GatsbyLink}
      to={to}
      title={`Servei ${title}`}
    >
      <Icon as={AddIcon} h="38px" w="36px" />
    </Link>
  )

  return (
    <MotionVStack
      ref={ref}
      h="full"
      w="full"
      minW="310px"
      py={4}
      px={6}
      spacing={4}
      bg="revell.500"
      textAlign="justify"
      alignItems="end"
      {...motionRevealConfig(controls, "right", index)}
    >
      <Heading as="h2" className={`with-sized-border ${className}`}>
        {title}
      </Heading>
      <List
        w="full"
        fontSize="xl"
        spacing={3}
        mt={4}
        pl={{
          base: 0,
          md: 4,
        }}
        textAlign={{
          base: props.index !== 1 ? "right" : "left",
          md: "left",
        }}
      >
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
      {isSmallDevice ? (
        <Box alignSelf={props.index === 1 ? "flex-end" : "flex-start"}>
          {linkButton}
        </Box>
      ) : (
        <>
          <Spacer />
          <Flex
            w="full"
            direction="row"
            justify={{
              base: props.index !== 1 ? "flex-start" : "flex-end",
              md: "flex-end",
            }}
          >
            {linkButton}
          </Flex>
        </>
      )}
    </MotionVStack>
  )
}
export default ServiceCard
