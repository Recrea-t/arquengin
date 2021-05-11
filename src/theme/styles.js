const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      color: "nightRider.500",
    },
    ".markdown": {
      li: {
        margin: "0 !important",
      },
    },
    ".markdown-blockquote": {
      p: {
        padding: ".5rem",
      },
      code: {
        bg: "transparent",
        py: "0",
        px: "1rem",
        fontFamily: "Roboto",
        fontSize: "1rem",
      },
    },
    ".hero-with-sized-border": {
      position: "relative",
      zIndex: 0,

      _after: {
        content: "''",
        position: "absolute",
        top: "80%",
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
    ".with-sized-border": {
      position: "relative",
      zIndex: 0,
      w: "100%",

      _after: {
        content: "''",
        position: "absolute",
        top: "90%",
        left: "1rem",
        height: "6px",
        width: "calc(100% - 1rem)",
        zIndex: -1,
        bg: "#eee",
        transform: "translateX(0)",
        transition: "transform 1s  cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      _hover: {
        _after: {
          transform: "translateX(-1rem)",
        },
      },
    },
    ".justify-end": {
      textAlign: "right",
      _after: {
        left: 0,
        right: "-1rem",
      },
      _hover: {
        _after: {
          transform: "translateX(1rem)",
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
    "p.is-arquitectura": {
      textDecoration: "underline",
      textDecorationColor: "#249e25",
    },
    "p.is-enginyeria": {
      textDecoration: "underline",
      textDecorationColor: "#f29a1e",
    },
    "p.is-interiorisme": {
      textDecoration: "underline",
      textDecorationColor: "#aa0645",
    },
    ".is-slider": {
      ".slick-prev": {
        left: "-2.5rem !important",
      },
      ".slick-next": {
        right: "-2.5rem !important",
      },
    },
    ".cookie-consent-container": {
      position: "relative",
      ".cookie-consent-content": {
        marginRight: "5rem !important",
      },
      ".cookie-consent-buttons": {
        height: "100%",

        button: {
          textTransform: "uppercase",
          color: "#fff !important",
          background: "transparent !important",
        },
        ".accept-btn": {
          fontWeight: "normal",
          height: "auto",
          width: "auto",
          p: 2,
          border: `6px solid white !important`,
          transition: "background .5s linear",
          marginRight: "5rem !important",
          _hover: {
            color: "#404040 !important",
            bg: "#fff !important",
          },
          _focus: {
            boxShadow: "none",
            color: "#404040",
            bg: "#fff important",
          },
        },
        ".decline-btn": {
          position: "absolute",
          top: "0",
          right: "0",
          fontSize: "2.5rem",
          margin: "0 !important",
          padding: "0 .5rem !important",
        },
      },
    },
  },
}

export default styles
