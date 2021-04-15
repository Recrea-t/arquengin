import { mode } from "@chakra-ui/theme-tools"

function variantCustomLink(props) {
  const { colorScheme: c } = props
  const color = mode(`${c}.500`, `${c}.200`)(props)
  const hoverColor = mode(`${c}.700`, `${c}.200`)(props)
  const activeColor = mode(`${c}.700`, `${c}.400`)(props)

  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    color: color,
    _hover: {
      textDecoration: "none",
      color: hoverColor,
      bg: "transparent",
      _disabled: {
        color: color,
        textDecoration: "none",
      },
    },
    _focus: {
      boxShadow: "none",
      color: hoverColor,
    },
    _active: {
      color: activeColor,
    },
  }
}

export default {
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  variants: {
    "custom-link": variantCustomLink,
    "nav-link": {
      ...variantCustomLink,
      fontSize: { base: "3xl", lg: "md" },
      fontWeight: { base: "normal", lg: "bold" },
      lineHeight: { base: 1.5, lg: 1.2 },
      textTransform: "uppercase",
      color: "greyishBrown.500",
      width: "auto",
      py: { base: 0, lg: 2 },
      pr: { base: 4, lg: 12 },
      pl: { base: 4, lg: 12 },
      bg: "transparent",
      border: "6px solid",
      borderRadius: "none",
      borderColor: "transparent",
      _hover: {
        borderColor: "revell.500",
        textDecoration: "none",
      },
      _focus: {
        borderColor: "revell.500",
        textDecoration: "none",
        boxShadow: "none",
      },
      _active: {
        borderColor: "revell.500",
        textDecoration: "none",
      },
    },
  },
}
