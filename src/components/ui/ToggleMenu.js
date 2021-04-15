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

  const { social } = useSiteMetadata()

  return (
    <>
      <Box
        ref={toggleRef}
        onClick={onOpen}
        display={{ base: "block", md: "none" }}
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <MinusIcon w={8} h={8} mt={12} />
        ) : (
          <HamburgerIcon w={8} h={8} />
        )}
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={toggleRef}
        autoFocus={false}
        colorScheme="mangoTango"
      >
        <DrawerContent pt={100} maxWidth="75%" boxShadow={"none"}>
          <DrawerBody>
            <VStack>
              <NavLink to="/projectes/">Projectes</NavLink>
              <NavLink to="/qui-som/">Qui Som</NavLink>
              <Button
                fontWeight="normal"
                variant="link"
                colorScheme="mangoTango"
                mb={{ base: 8, sm: 0 }}
                mr={{ base: 0, sm: 8 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
              >
                Serveis
              </Button>
              <Collapse in={show} animateOpacity>
                <Box>
                  <NavLink to="/arquitectura/">Arquitectura</NavLink>
                  <NavLink to="/enginyeria/">Enginyeria</NavLink>
                  <NavLink to="/interiorisme/">Interiorisme</NavLink>
                </Box>
              </Collapse>
              <NavLink to="/#contacte" isLast>
                Contacte
              </NavLink>

              <HStack spacing={4}>
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
