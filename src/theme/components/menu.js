export default {
  baseStyle: {
    list: {
      bg: "white",
      boxShadow: "0px 5px 9px 0 rgba(0, 0, 0, 0.74)",
      minW: "auto",
      py: "0",
      zIndex: 3,
      borderRadius: "none",
      borderWidth: "0",
    },
    item: {
      py: "0.4rem",
      px: "0.8rem",
      transition: "background 50ms ease-in 0s",
      _focus: {
        bg: "revell.500",
      },
      _active: {
        bg: "revell.600",
      },
      _expanded: {
        bg: "revell.500",
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
    },
  },
}
