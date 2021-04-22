import React from "react"
import {
  HStack,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
} from "@chakra-ui/react"

import {
  connectCurrentRefinements,
  connectRefinementList,
} from "react-instantsearch-dom"

const ClearButton = connectCurrentRefinements(({ items, refine }) => (
  <Button
    variant="custom-link"
    colorScheme="revell"
    onClick={event => {
      event.preventDefault()
      refine(items)
    }}
  >
    Tots
  </Button>
))

const ClearMenuItem = connectCurrentRefinements(({ items, refine }) => (
  <MenuItem
    onClick={event => {
      event.preventDefault()
      refine(items)
    }}
    display="block"
    w="full"
    textTransform="capitalize"
    textAlign="center"
  >
    Tots
  </MenuItem>
))

const SearchButtons = ({ currentRefinement, refine }) => {
  return (
    <HStack spacing={4} mb={8}>
      <ClearButton />

      {["rehabilitació", "habitatge", "espai comercial"].map(item => (
        <Button
          key={item}
          variant="custom-link"
          colorScheme="revell"
          onClick={event => {
            event.preventDefault()
            refine(item)
          }}
          isActive={item === currentRefinement[0]}
        >
          {item}
        </Button>
      ))}
    </HStack>
  )
}

const SearchMenu = ({ refine }) => {
  return (
    <Center mb={4}>
      <Menu gutter={0} colorScheme="revell">
        <MenuButton
          as={Button}
          variant="custom-link"
          colorScheme="revell"
          display="block"
          p={4}
          py={2}
          _focus={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
        >
          Categories
        </MenuButton>
        <MenuList>
          <ClearMenuItem />
          {["rehabilitació", "habitatge", "espai comercial"].map(item => (
            <MenuItem
              key={item}
              onClick={event => {
                event.preventDefault()
                refine(item)
              }}
              display="block"
              w="full"
              textTransform="capitalize"
              textAlign="center"
            >
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Center>
  )
}

const SearchFilters = connectRefinementList(props => {
  const isSmallDevice = useBreakpointValue({ base: true, md: false })

  return isSmallDevice ? (
    <SearchMenu {...props} />
  ) : (
    <SearchButtons {...props} />
  )
})

export default SearchFilters
