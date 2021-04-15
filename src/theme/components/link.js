import { mode } from "@chakra-ui/theme-tools"

function variantButton(props) {
  const { colorScheme: c } = props
  let color = "white",
    activeColor = "white"

  if (c !== "white") {
    color = mode(`${c}.500`, `${c}.200`)(props)
    activeColor = mode(`${c}.700`, `${c}.400`)(props)
  }

  return {
    color: "greyishBrown.500",
    textTransform: "uppercase",
    height: "auto",
    width: "auto",
    p: 2,
    bg: "transparent",
    border: `6px solid`,
    borderRadius: "none",
    borderColor: color,
    transition: "background .5s linear",
    _hover: {
      bg: color,
      textDecoration: "none",
      _disabled: {
        color: color,
        textDecoration: "none",
      },
    },
    _focus: {
      boxShadow: "none",
      bg: color,
      textDecoration: "none",
    },
    _active: {
      bg: activeColor,
      borderColor: activeColor,
      textDecoration: "none",
    },
  }
}

export default {
  baseStyle: {
    boxShadow: "none",
    _focus: {
      boxShadow: "none",
      textDecoration: "underline",
    },
  },
  variants: {
    button: variantButton,
    "nav-link": {
      fontSize: { base: "3xl", lg: "md" },
      fontWeight: { base: "normal", lg: "bold" },
      textTransform: "uppercase",
      color: "greyishBrown.500",
      py: { base: 0, lg: 2 },
      pr: { base: 4, lg: 12 },
      pl: { base: 4, lg: 12 },
      bg: "transparent",
      border: "6px solid",
      borderColor: "transparent",
      _hover: {
        borderColor: "revell.500",
        textDecoration: "none",
      },
      _focus: {
        borderColor: "revell.500",
        textDecoration: "none",
      },
      _active: {
        borderColor: "revell.500",
        textDecoration: "none",
      },
    },
    "subnav-link": {
      fontSize: { base: "3xl", lg: "md" },
      fontWeight: "normal",
      lineHeight: { base: "2", lg: "3" },
      color: "greyishBrown.500",

      _hover: {
        textDecoration: "none",
      },
      _focus: {
        textDecoration: "none",
      },
      _active: {
        textDecoration: "none",
      },
    },
  },
}
