import { mode } from "@chakra-ui/theme-tools"

function variantCustomLink(props) {
  const { colorScheme: c } = props
  let color = "white",
    activeColor = "white"

  if (c !== "white") {
    color = mode(`${c}.500`, `${c}.200`)(props)
    activeColor = mode(`${c}.700`, `${c}.400`)(props)
  }

  return {
    color: "greyishBrown.500",
    fontWeight: "normal",
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
      _disabled: {
        color: color,
      },
    },
    _focus: {
      boxShadow: "none",
      bg: color,
    },
    _active: {
      bg: activeColor,
      borderColor: activeColor,
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
