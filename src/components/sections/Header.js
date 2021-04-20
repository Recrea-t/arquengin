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
        <Menu gutter={0} matchWidth={true} colorScheme="revell">
          <MenuButton as={Button} variant="nav-link" whileTap={{ scale: 0.95 }}>
            Serveis
          </MenuButton>
          <MenuList>
            <MenuItem>
              <NavLink
                variant="subnav-link"
                w="full"
                textAlign="center"
                to="/arquitectura/"
              >
                Arquitectura
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                variant="subnav-link"
                w="full"
                textAlign="center"
                to="/enginyeria/"
              >
                Enginyeria
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                variant="subnav-link"
                w="full"
                textAlign="center"
                to="/interiorisme/"
              >
                Interiorisme
              </NavLink>
            </MenuItem>
          </MenuList>
        </Menu>
        <NavLink to="/contacte" isLast>
          Contacte
        </NavLink>
      </>
    )
  }

  return (
    <Flex
      as="nav"
      h={{ base: "64px", lg: "96px" }}
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
      boxShadow={isOpen ? "none" : "0px 5px 9px 0 rgba(0, 0, 0, 0.74)"}
      wrap="wrap"
    >
      <Link
        to="/"
        title="Inici"
        as={GatsbyLink}
        display={isOpen ? "none" : "block"}
      >
        <StaticImage
          src="../../images/Logo.jpg"
          alt="Logotip Arquengin"
          loading="eager"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          placeholder="tracedSVG"
          width={200}
        />
      </Link>

      <ToggleMenu isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

      <Flex
        display={{ base: "none", lg: "inherit" }}
        align="center"
        direction="row"
        justify="flex-end"
      >
        <MenuItems />
      </Flex>

      <HStack spacing={2} display={{ base: "none", lg: "inherit" }}>
        <SocialLink item={social.pinterest} icon={FaPinterestP} />
        <SocialLink item={social.instagram} icon={FaInstagram} />
        <SocialLink item={social.facebook} icon={FaFacebookF} />
      </HStack>
    </Flex>
  )
}

export default Header
