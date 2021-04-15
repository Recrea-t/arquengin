import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  Flex,
  Link,
  Menu,
  MenuButton,
  Button,
  MenuItem,
  MenuList,
  HStack,
  useDisclosure,
} from "@chakra-ui/react"

import useSiteMetadata from "../siteMetadata"

import NavLink from "../ui/NavLink"
import SocialLink from "../ui/SocialLink"
import ToggleMenu from "../ui/ToggleMenu"

import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaPinterestP } from "@react-icons/all-files/fa/FaPinterestP"

const Header = () => {
  const { social } = useSiteMetadata()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const MenuItems = () => {
    return (
      <>
        <NavLink to="/projectes/">Projectes</NavLink>
        <NavLink to="/qui-som/">Qui Som</NavLink>
        <Menu gutter={0}>
          <MenuButton
            as={Button}
            variant="link"
            colorScheme="mangoTango"
            mb={{ base: 8, sm: 0 }}
            mr={{ base: 0, sm: 8 }}
            whileTap={{ scale: 0.95 }}
          >
            Serveis
          </MenuButton>
          <MenuList>
            <MenuItem>
              <NavLink to="/arquitectura/">Arquitectura</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/enginyeria/">Enginyeria</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/interiorisme/">Interiorisme</NavLink>
            </MenuItem>
          </MenuList>
        </Menu>
        <NavLink to="/#contacte" isLast>
          Contacte
        </NavLink>
      </>
    )
  }

  return (
    <Flex
      as="nav"
      h={100}
      w="full"
      pos="fixed"
      top="0"
      right="0"
      left="0"
      zIndex="1"
      align="center"
      justify="space-between"
      p={4}
      mx="auto"
      bg="white"
      color="mangoTango.500"
      borderBottom="1px"
      borderBottomColor="mangoTango.500"
      wrap="wrap"
    >
      <Link
        to="/"
        title="Inici"
        as={GatsbyLink}
        display={isOpen ? "none" : "block"}
      >
        <StaticImage
          src="../../images/LogoRecreat.png"
          alt="Logotip Recrea't"
          loading="eager"
          layout="fixed"
          placeholder="tracedSVG"
          width={200}
        />
      </Link>

      <ToggleMenu isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

      <Flex
        display={{ base: "none", md: "inherit" }}
        align="center"
        direction="row"
        justify={{ md: "space-between", lg: "flex-end" }}
      >
        <MenuItems />
      </Flex>

      <HStack spacing={4} display={{ base: "none", md: "inherit" }}>
        <SocialLink item={social.pinterest} icon={FaPinterestP} />
        <SocialLink item={social.instagram} icon={FaInstagram} />
        <SocialLink item={social.facebook} icon={FaFacebookF} />
      </HStack>
    </Flex>
  )
}

export default Header
