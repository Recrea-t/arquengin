import React, { useEffect } from "react"
import { Link as GatsbyLink } from "gatsby"

import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MotionVStack, motionRevealConfig } from "../../theme/utils"
import {
  Flex,
  Heading,
  Icon,
  Link,
  List,
  ListItem,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"

const ServiceCard = props => {
  const { title, className, items, to } = props

  const isSmallDevice = useBreakpointValue({ base: true, md: false })
  const index = isSmallDevice ? 0 : props.index

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

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
      justify="space-between"
      alignItems="end"
      {...motionRevealConfig(controls, "right", index)}
    >
      <Heading as="h2" className={`with-sized-border ${className}`}>
        {title}
      </Heading>
      <List fontSize="xl" spacing={3} mt={4} pl={4}>
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
      <Flex w="full" direction="row" justify="flex-end">
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
      </Flex>
    </MotionVStack>
  )
}
export default ServiceCard
