export default {
  baseStyle: {
    fontWeight: "normal",
    color: "greyishBrown.500",
  },
  sizes: {
    lg: {
      lineHeight: 1,
    },
  },
  variants: {
    "in-hero": {
      fontSize: ["5xl", null, "6xl"],
      lineHeight: 1.37,
      color: "#ffffff",
      textAlign: "center",
    },
  },
  defaultProps: {
    size: "lg",
  },
}
