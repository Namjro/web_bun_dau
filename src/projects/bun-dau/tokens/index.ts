export const DESIGN_TOKENS = {
  colors: {
    brand: {
      green: "#2E6B3E",
      greenDark: "#235330",
      greenLight: "#EAF3EC",
    },
    cta: {
      orange: "#F57C00",
      orangeHover: "#E65100",
      orangeLight: "#FFF3E0",
    },
    background: {
      primary: "#F7F5EE",
      subtle: "#F0ECE1",
    },
    surface: {
      card: "#FFFFFF",
    },
    text: {
      primary: "#1C1917",
      secondary: "#57534E",
      muted: "#78716C",
    },
    border: {
      divider: "#E7E5E4",
    },
  },
  typography: {
    fontFamily: "'Be Vietnam Pro', sans-serif",
    h1: {
      fontSize: "42px",
      fontWeight: 800,
      lineHeight: 1.22,
    },
    h2: {
      fontSize: "22px",
      fontWeight: 700,
      lineHeight: 1.35,
    },
    price: {
      fontSize: "19px",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    body: {
      fontSize: "15px",
      fontWeight: 400,
      lineHeight: 1.6,
    },
  },
} as const;
