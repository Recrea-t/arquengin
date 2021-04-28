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
      textShadow: "3px 3px 8px rgba(0,0,0,0.89)",
    },
  },
  defaultProps: {
    size: "lg",
  },
}
