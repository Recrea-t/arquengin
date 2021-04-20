import React from "react"
import {
  Box,
  VStack,
  Drawer,
  DrawerContent,
  DrawerBody,
  Button,
  Collapse,
  HStack,
} from "@chakra-ui/react"
import { HamburgerIcon, MinusIcon } from "@chakra-ui/icons"

import NavLink from "../ui/NavLink"
import SocialLink from "../ui/SocialLink"
import useSiteMetadata from "../siteMetadata"

import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaPinterestP } from "@react-icons/all-files/fa/FaPinterestP"

const ToggleMenu = props => {
  const { isOpen, onOpen, onClose } = props

  const [show, setShow] = React.useState(false)
  const toggleMenu = () => setShow(!show)

  const toggleRef = React.useRef()

  const handleOpen = () => {
    onOpen()
    document.getElementById("main").style.marginRight = "50%"
  }

  const handleClose = () => {
    onClose()
    document.getElementById("main").style.marginRight = "0"
  }

  const { social } = useSiteMetadata()

  return (
    <>
      <Box
        ref={toggleRef}
        onClick={handleOpen}
        display={{ base: "block", lg: "none" }}
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <MinusIcon w={8} h={8} mt={4} />
        ) : (
          <HamburgerIcon w={8} h={8} />
        )}
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={handleClose}
        finalFocusRef={toggleRef}
        autoFocus={false}
        colorScheme="mangoTango"
      >
        <DrawerContent
          pt={100}
          maxWidth={{ base: "70%", md: "50%" }}
          boxShadow={"none"}
        >
          <DrawerBody px={0}>
            <VStack align="flex-start">
              <NavLink to="/projectes/" onClick={handleClose}>
                Projectes
              </NavLink>
              <NavLink to="/qui-som/" onClick={handleClose}>
                Qui Som
              </NavLink>
              <Button
                fontWeight="normal"
                variant="nav-link"
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
              >
                Serveis
              </Button>
              <Collapse in={show} animateOpacity>
                <Box>
                  <NavLink
                    variant="subnav-link"
                    ml={12}
                    to="/arquitectura/"
                    onClick={handleClose}
                  >
                    Arquitectura
                  </NavLink>
                  <NavLink
                    variant="subnav-link"
                    ml={12}
                    to="/enginyeria/"
                    onClick={handleClose}
                  >
                    Enginyeria
                  </NavLink>
                  <NavLink
                    variant="subnav-link"
                    ml={12}
                    to="/interiorisme/"
                    onClick={handleClose}
                  >
                    Interiorisme
                  </NavLink>
                </Box>
              </Collapse>
              <NavLink to="/contacte/" onClick={onClose} isLast>
                Contacte
              </NavLink>

              <HStack spacing={4} alignSelf="center" pt={20}>
                <SocialLink item={social.pinterest} icon={FaPinterestP} />
                <SocialLink item={social.instagram} icon={FaInstagram} />
                <SocialLink item={social.facebook} icon={FaFacebookF} />
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default ToggleMenu
