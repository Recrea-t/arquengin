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
  Box,
} from "@chakra-ui/react"

import useSiteMetadata from "../siteMetadata"

import NavLink from "../ui/NavLink"
import SocialLink from "../ui/SocialLink"
import ToggleMenu from "../ui/ToggleMenu"

//import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
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
          <MenuButton as={Button} variant="nav-link">
            Serveis
          </MenuButton>
          <MenuList>
            <MenuItem>
              <NavLink
                variant="subnav-link"
                w="full"
                textAlign="center"
                to="/serveis/#arquitectura"
              >
                Arquitectura
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                variant="subnav-link"
                w="full"
                textAlign="center"
                to="/serveis/#enginyeria"
              >
                Enginyeria
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                variant="subnav-link"
                w="full"
                textAlign="center"
                to="/serveis/#interiorisme"
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
    <Box
      as="nav"
      w="full"
      h={{ base: "64px", lg: "96px" }}
      pos="fixed"
      top="0"
      right="0"
      left="0"
      zIndex="1"
      bg="white"
      boxShadow={isOpen ? "none" : "0px 5px 9px 0 rgba(0, 0, 0, 0.74)"}
    >
      <Flex
        h="full"
        w="full"
        maxW="1200px"
        align="center"
        justify="space-between"
        mx="auto"
        px={4}
        wrap="wrap"
      >
        <Link
          display={isOpen ? "none" : "block"}
          maxW={[200, null, "20%"]}
          minW={200}
          h="full"
          to="/"
          title="Inici"
          as={GatsbyLink}
        >
          <StaticImage
            style={{ width: "100%", height: "100%" }}
            objectFit="contain"
            src="../../images/Logo.jpg"
            alt="Logotip Arquengin"
            loading="eager"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            placeholder="tracedSVG"
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
          {/*<SocialLink item={social.linkedin} icon={FaLinkedinIn} />*/}
        </HStack>
      </Flex>
    </Box>
  )
}

export default Header
