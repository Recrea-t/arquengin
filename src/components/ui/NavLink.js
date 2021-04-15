import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link } from "@chakra-ui/react"
import { MotionText } from "../../theme/utils"

const NavLink = props => {
  const {
    children,
    onClick,
    isLast,
    to = "/",
    variant = "nav-link",
    ...rest
  } = props

  const isPartiallyActive = props => {
    return props.isPartiallyCurrent ? { style: { color: "#63656A" } } : {}
  }

  return (
    <MotionText display="block" whileTap={{ scale: 0.95 }} {...rest}>
      <Link
        to={to}
        title={children}
        as={GatsbyLink}
        variant={variant}
        getProps={isPartiallyActive}
        onClick={onClick}
      >
        {children}
      </Link>
    </MotionText>
  )
}

export default NavLink
