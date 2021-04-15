const styles = {
  global: {
    html: {
      //scrollBehavior: "smooth",
    },
    body: {
      color: "nightRider.500",
    },
    ".markdown": {
      li: {
        margin: "0 !important",
      },
    },
    ".with-sized-border": {
      position: "relative",
      zIndex: 1,

      _after: {
        content: "''",
        position: "absolute",
        top: "78%",
        left: "1.3rem",
        height: "6px",
        width: "100%",
        zIndex: -1,
        transform: "translateX(0)",
        transition: "transform 1s  cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      _hover: {
        _after: {
          transform: "translateX(-1.3rem)",
        },
      },
    },
    ".is-arquitectura": {
      _after: {
        bg: "#249e25",
      },
    },
    ".is-enginyeria": {
      _after: {
        bg: "#f29a1e",
      },
    },
    ".is-interiorisme": {
      _after: {
        bg: "#aa0645",
      },
    },
  },
}

export default styles
